import React, {PureComponent, Fragment} from 'react';
import styles from './ShowPage.module.css';

class ShowPage extends PureComponent {
    props = {
        image: 'test',
        name: 'test_name',
        id: '123',
        summary: '<p>Test</p>'
    }
    
    render() {
        return (
            <Fragment>
                <p>Warehouse 13</p>
                <img src="http://static.tvmaze.com/uploads/images/medium_portrait/160/402219.jpg" alt="Warehouse 13"/>
                <div>
                    <p>After saving the life of the President, two Secret Service agents find themselves abruptly transferred to Warehouse 13 -- a massive, top-secret storage facility in windswept South Dakota that houses every strange artifact, mysterious relic, fantastical object and supernatural souvenir ever collected by the U.S. government. The Warehouse's caretaker Artie charges Pete and Myka with chasing down reports of supernatural and paranormal activity in search of new objects to cache at the Warehouse, as well as helping him to control the warehouse, itself. Rounding out the team is technology specialist Claudia and former ATF Steve Jinks.</p>
                </div>
                <div className={styles.cast}>
                    <div className="t-person">
                        <p>Joanne Kelly</p>
                        <img src="http://static.tvmaze.com/uploads/images/medium_portrait/3/9088.jpg" alt="Joanne Kelly"/>
                    </div>
                    <div className="t-person">
                        <p>Eddie McClintock</p>
                        <img src="http://static.tvmaze.com/uploads/images/medium_portrait/70/176768.jpg" alt="Eddie McClintock"/>                    </div>
                    <div className="t-person">
                        <p>Saul Rubinek</p>
                        <img src="http://static.tvmaze.com/uploads/images/medium_portrait/3/9104.jpg" alt="Saul Rubinek"/>
                    </div>
                    <div className="t-person">
                        <p>Allison Scagliotti</p>
                        <img src="http://static.tvmaze.com/uploads/images/medium_portrait/38/96274.jpg" alt="Allison Scagliotti"/>
                    </div>
                    <div className="t-person">
                    <p>Aaron Ashmore</p>
                    <img src="http://static.tvmaze.com/uploads/images/medium_portrait/149/373412.jpg" alt="Aaron Ashmore"/>
                    </div>
                    <div className="t-person">
                        <p>Genelle Williams</p>
                        <img src="http://static.tvmaze.com/uploads/images/medium_portrait/72/180952.jpg" alt="Genelle Williams"/>
                    </div>
                    <div className="t-person">
                        <p>Simon Reynolds</p>
                        <img src="http://static.tvmaze.com/uploads/images/medium_portrait/3/9112.jpg" alt="Simon Reynolds"/>
                    </div>
                </div>
            </Fragment>
        );
    }
};

export default ShowPage;