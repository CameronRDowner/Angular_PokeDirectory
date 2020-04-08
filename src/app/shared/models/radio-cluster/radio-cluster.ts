export class RadioCluster {
    alternateStyling:boolean;
    buttonNames:string[];

    constructor(_buttonNames:string[], _alternateStyling:boolean){
        this.alternateStyling = _alternateStyling;
        this.buttonNames = _buttonNames
    }
}
