import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'my-component',
    styleUrl: 'my-component.css',
    shadow: true
})
export class MyComponent {
    @Prop({ reflect: true }) currentRoll: number;
    @Prop({ reflect: true }) secondRoll: number;
    @Prop({reflect: true}) winOrLose: string;

    handleClick(event: UIEvent) {
        this.currentRoll = Math.ceil(Math.random() * 20)
        console.log('starting roll:', this.currentRoll);
        this.winOrLose = 'here'
    }


    secondClick(nextEvent: UIEvent) {
            this.secondRoll = Math.ceil(Math.random() * 20);
            console.log('second roll')
    }


    render() {
        return (
                <body>
                    <h1>Stenciljs</h1>
                    <section>
                        <button onClick={(event: UIEvent) => this.handleClick(event)}>Click Me!</button>
                        <span class="output">You rolled a: {this.currentRoll}</span>
                    </section>
                    <section>
                        <button onClick={(nextEvent: UIEvent) => this.secondClick(nextEvent)}>Roll Again?</button>
                        <span class="output">Second roll:<span>{this.secondRoll}</span></span>
                    </section>
               <result-component firstResult={this.currentRoll} secondResult={this.secondRoll}></result-component>
                </body>
        )
    }
}
