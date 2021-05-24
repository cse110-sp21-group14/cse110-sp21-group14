// marker.js
class MarkerTool {

    static get isInline() {
      return true;
    }
  
    get state() {
      return this._state;
    }
  
    set state(state) {
      this._state = state;
  
      this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state);
    }
  
    constructor({api}) {
      this.api = api;
      this.button = null;
      this._state = false;
  
      this.tag = 'MARK';
      this.class = 'cdx-marker';
    }
  
    render() {
      this.button = document.createElement('button');
      this.button.type = 'button';
      this.button.innerHTML = '<svg width="20" height="18">';
      this.button.classList.add(this.api.styles.inlineToolButton);
  
      return this.button;
    }
  
    surround(range) {
      if (this.state) {
        this.unwrap(range);
        return;
      }
  
      this.wrap(range);
    }
  
    wrap(range) {
      const selectedText = range.extractContents();
      const mark = document.createElement(this.tag);
  
      mark.classList.add(this.class);
      mark.appendChild(selectedText);
      range.insertNode(mark);
  
      this.api.selection.expandToTag(mark);
    }
  
    unwrap(range) {
      const mark = this.api.selection.findParentTag(this.tag, this.class);
      const text = range.extractContents();
  
      mark.remove();
  
      range.insertNode(text);
    }
  
  
    checkState() {
      const mark = this.api.selection.findParentTag(this.tag);
  
      this.state = !!mark;
    }
}

const editor = new EditorJS({

  holder: 'editorjs',
  tools: {
    crossout: MarkerTool,
      
    list: {
      class: NestedList,
      inlineToolbar: true,
    },
  },  
});

function myFunction(){
  editor.save().then((output) => {
      console.log('Data: ', output);
  }).catch((error) => {
      console.log('Saving failed: ', error)
  });
}
  
  
  