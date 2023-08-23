import { userSettings } from '../app.js';
import { renderInterface } from './game-interface-components.js';

// const SUIT = ['hearts', 'clubs', 'diamonds', 'spades'];
// const cardValue = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

export const renderGamePage = (appEl) => {
    let gamePageHtml = '';
    switch (userSettings.difficulty) {
        case 'easy':
            gamePageHtml = `
            <div class="interface-container"></div>
            <div class="interface-container"></div>
            <div class="cards-container cards-container_easy">
                <div class="card card_back">          
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>                
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>                
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>                
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>                                                                                           
            `;
            break;

        case 'medium':
            gamePageHtml = `
            <div class="interface-container"></div>
            <div class="interface-container"></div>
            <div class="cards-container cards-container_medium">
                <div class="card card_back">        
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>                
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>                
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>                
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>                                                                                           
            `;
            break;
        case 'hard':
            gamePageHtml = `
            <div class="interface-container"></div>
            <div class="interface-container"></div>
            <div class="cards-container cards-container_hard">
                <div class="card card_back">           
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>                
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/clubs.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/clubs.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>                
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/hearts.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/hearts.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/spades.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/spades.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">A</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>                
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">K</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">Q</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">J</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">10</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">9</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">8</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                <div class="card">
                    <div class="card-left">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">7</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>
                    <div class="card">
                    <div class="card-left">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>
                    <div class="card-suit"><img src="./img/suit/diamonds.png" alt=""></div>
                    <div class="card-right">
                        <div class="card-name">6</div>
                        <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/diamonds.png" alt=""></div>
                    </div>            
                </div>                                                                                           
            `;
            break;
    }

    appEl.innerHTML = gamePageHtml;

    const interfaceElement = document.querySelector('.interface-container');
    renderInterface(interfaceElement);
};
