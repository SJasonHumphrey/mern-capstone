import React,{useState} from 'react';
import {Menu,Grid} from 'semantic-ui-react';


const Home = () => {
    const [activeItem, setActiveItem] = useState('')

    const handleItemClick = (e,{name}) => {
        setActiveItem(name)
    }
    

    return (
        <>
        <Grid className="feature-grid">
            <Grid.Column width={3} color="green" className="feature-col">
                Col 1
            </Grid.Column>
            <Grid.Column width={13} color="blue" className="feature-col">
                Col 2
            </Grid.Column>
        </Grid>
        </>
        
    )
}

export default Home

{/* <>
        <Menu pointing secondary vertical  className="feature-menu">
            <Menu.Item
            className="feature-menu-item"
            fluid
            name="typingTest"
            active={activeItem ==='typingTest'}
            onClick={handleItemClick}
            />
            <Menu.Item
            className="feature-menu-item"
            fluid
            name="quiz"
            active={activeItem ==='quiz'}
            onClick={handleItemClick}
            />
            <Menu.Item
            className="feature-menu-item"
            fluid
            name="flashCards"
            active={activeItem ==='flashCards'}
            onClick={handleItemClick}
            />
            
        </Menu>        
</> */}