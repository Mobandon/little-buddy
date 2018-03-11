'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  config: {
    picture: {
      type: 'string',
      title: 'URL',
      description: 'The URL of the picture',
      default: "https://raw.githubusercontent.com/atom/atom/master/resources/app-icons/stable/png/128.png",
      order: 1
    }
  },

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'little-buddy:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },


  toggle() {
    console.log('LittleBuddy was toggled!');
    const els = document.getElementsByClassName("tree-view-root");
    const el = els[0];
    console.log(el);
    var style = el.style.cssText;
    el.style.cssText = style === '' ? "background-image: url(" + atom.config.get('little-buddy.picture') + "); background-repeat: no-repeat; background-position: center bottom; background-size: auto 10%; background-blend-mode: overlay;" : '';
    //el.style.cssText = "";
  }

};
