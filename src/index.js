import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import marked from 'marked';


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '# Header 1\n## Header 2\n[link](https://google.es) \n\n' +
            'some inline text\n\n' + 
            ' ``` inline code```\n\n' + 
            '    //comment\n    <div>\n      <p>some text</p>\n    </div>\n' + 
            '* li 1 \n* li 2\n* li 3\n' +
            '># This is a blockquote \n>blockquote 1 \n\n >blockquote 2\n\n' + 
            '![background image](http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/squares.png "title")\n\n' + 
            '**this is bold text**'
        }
        this.handleChange = this.handleChange.bind(this);
        // this.initialText = this.initialText.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }

    // initialText = () => {
    //     this.setState({
    //         input: '',
    //     });
    // }

    componentDidMount() {
        // this.initialText();
    }

    render() {
        // const arr = this.state.input.split('\n').map(s => s + "\n");;
        // console.log(arr[0])

        return (
            <div>
                <textarea id="editor" rows="10" cols="60" value={this.state.input} onChange={this.handleChange}></textarea>
                <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.state.input)}}></div>
            </div>
        );
    }
}



ReactDOM.render(<Main />, document.getElementById('root'));



