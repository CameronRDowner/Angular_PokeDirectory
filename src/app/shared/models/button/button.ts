export class Button {
    buttonColor: string;

    constructor(_buttonColor?:string){
        if(_buttonColor !== undefined){
            this.buttonColor = _buttonColor;
        }
        else{
            this.buttonColor = '#BE3638'
        }
    }
}
