import { Component, h, Prop } from '@stencil/core';
import { MyComponent } from '../my-component/my-component';

@Component({
    tag: 'result-component',
    styleUrl: 'result-component.css',
    shadow: true
})
export class ResultComponent {
    @Prop({ reflect: true }) somethingHappens: string;
    @Prop() resultsOfRoll: MyComponent;
    @Prop() firstResult: number;
    @Prop() secondResult: number;

    getResult(event: UIEvent) {
       // let firstResult = this.resultsOfRoll.currentRoll;
        //let secondResult = this.resultsOfRoll.secondRoll;
        let resultOfRoll = this.firstResult + this.secondResult;
        console.log("BLEEP", resultOfRoll);

        if (resultOfRoll >= 20) {
            this.somethingHappens = "You rolled pretty good!"
        }
        else this.somethingHappens = "You rolled pretty bad."
    }



    render() {
        return (
            <div>
                <div>
                    <button onClick={(event: UIEvent) => this.getResult(event)}>GO!</button>
                </div>
                <h1>{this.somethingHappens}</h1>
            </div>
        )
    }
}