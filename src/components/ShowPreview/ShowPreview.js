import React, {PureComponent} from 'react';
import styles from './ShowPreview.module.css'

class ShowPreview extends PureComponent {

    
    render() {
        return (
            <div className={"t-preview " + styles.container}>
                <div>
                    <a className="t-link" href="/shows/434">Warehouse 13</a>
                    <img src="http://static.tvmaze.com/uploads/images/medium_portrait/160/402219.jpg" alt="Warehouse 13" />
                </div>
                <div>
                    <p>After saving the life of the President, two Secret Service agents find themselves abruptly transferred to Warehouse 13 -- a massive, top-secret storage facility in windswept South Dakota that houses every strange artifact, mysterious relic, fantastical object and supernatural souvenir ever collected by the U.S. government. The Warehouse's caretaker Artie charges Pete and Myka with chasing down reports of supernatural and paranormal activity in search of new objects to cache at the Warehouse, as well as helping him to control the warehouse, itself. Rounding out the team is technology specialist Claudia and former ATF Steve Jinks.</p>
                </div>
            </div>
        );
    }
};

export default ShowPreview;