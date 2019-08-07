import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import marked from 'marked';

let renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
    let link = marked.Renderer.prototype.link.apply(this, arguments);
    return link.replace("<a", "<a target='_blank'");
};

marked.setOptions({
    breaks: true,
    renderer: renderer,
});

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '# Header 1\n## Header 2\n[link](https://google.es) \n\n' +
            'some inline text\n\n' + 
            ' ```inline code```\n\n' + 
            '    //comment\n    <div>\n      <p>some text</p>\n    </div>\n' + 
            '* li 1 \n* li 2\n* li 3\n' +
            '># This is a blockquote \n>blockquote 1 \n\n >blockquote 2\n\n' + 
            '![background image](https://upload.wikimedia.org/wikipedia/commons/4/46/%27Anas_hybrid%27_Mallard_at_Henham_Essex_England_03.jpg "title")\n\n' + 
            '**this is bold text**'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }

    render() {
        let rawHTML = marked(this.state.input);
        return (
            <div className="container">
                <textarea id="editor" rows="20" cols="60" value={this.state.input} onChange={this.handleChange}></textarea>
                <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}></div>
            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));



