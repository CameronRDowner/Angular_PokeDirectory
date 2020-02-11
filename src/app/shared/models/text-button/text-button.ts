import { Button } from '../../models/button/button'

export class TextButton extends Button {
    text: string;
    textColor: string;

    constructor(_text:string, _textColor?:string, _buttonColor?:string){
        if(_buttonColor !== undefined){
            super(_buttonColor);
        }
        else{
            super();
        }
        if(_textColor !== undefined){
            this.textColor = _textColor;
        }
        else{
            this.textColor = '#000000'
        }
        this.text = _text;
    }
}
