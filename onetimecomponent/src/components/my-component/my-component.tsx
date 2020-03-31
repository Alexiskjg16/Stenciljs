import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'my-component',
    styleUrl: 'my-component.css',
    shadow: true
})
export class MyComponent {
    @Prop({ reflect: true }) currentRoll: number;

    handleClick(event: UIEvent) {
        this.currentRoll = Math.ceil(Math.random() * 20)
        console.log('starting roll:', this.currentRoll);
    }

    render() {
        return (
                <body>
                    <h1>Stenciljs</h1>
                    <section>
                        <button onClick={(event: UIEvent) => this.handleClick(event)}>Click Me!</button>
                        <span class="output">{this.currentRoll}</span>
                    </section>
                </body>
        )
    }
}
