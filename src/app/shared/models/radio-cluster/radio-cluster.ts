export class RadioCluster {
    alternativeStyling:boolean;
    buttonNames:string[];

    constructor(_buttonNames:string[], _alternativeStyling:boolean){
        this.alternativeStyling = _alternativeStyling;
        this.buttonNames = _buttonNames
    }
}
