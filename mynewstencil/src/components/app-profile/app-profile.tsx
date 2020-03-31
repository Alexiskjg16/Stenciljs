import { Component, Event, EventEmitter, Listen, h, Prop } from '@stencil/core';

@Component({
    tag: 'app-profile',
    styleUrl: 'app-profile.css',
    shadow: true
})
export class AppProfile {
    dropdownEl!: any;
    nameElement!: any;

    @Listen('click', { capture: true })
    handleClick(event) {

        var x = this.dropdownEl;
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    }

    @Listen('click', { capture: true })
    handleNameClick(event) {
        var y = this.nameElement;
        y.innerHTML = this.name;
        console.log('clicked')
    }

    @Prop() name: string;

    render() {
        return (
            <div>
                <header>
                    Component: Two
                </header>
                <div class="dropdown">
                    <button id="dropDown">What's my name?</button>
                    <ul id="myDropdown" ref={(el) => this.dropdownEl = el as any}>
                        <li ref={(Alexis) => this.nameElement = Alexis as any}><a href="#">Alexis</a></li>
                        <li><a href="#" ref={(Mike) => this.nameElement = Mike as any}>Mike</a></li>
                        <li><a href="#" ref={(Cory) => this.nameElement = Cory as any}>Cory</a></li>
                    </ul>
                    <p>My name is: {this.name}</p>
                </div>

            </div>
        );
    }
}
