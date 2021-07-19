import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {Menu,Grid,Sidebar,Segment} from 'semantic-ui-react';


const Home = () => {
    const [activeItem, setActiveItem] = useState('')
    const [visible, setVisible] = useState(false)

    const handleItemClick = (e,{name}) => {
        setActiveItem(name)
        setVisible(!visible)
        console.log(visible)
    }
    

    return (
        <>
        <Menu pointing secondary>
            <Menu.Item
            name="menu"
            active={activeItem ==='menu'}
            onClick={handleItemClick}
            >Menu</Menu.Item>
        </Menu>

        <Sidebar.Pushable as={Segment}>
            <Sidebar
            as={Menu}
            visible={visible}
            animation='overlay'
            vertical
            >
            <Menu.Item as='Link'>Typing Practice</Menu.Item>
            <Menu.Item as='Link'>Quizzes</Menu.Item>
            <Menu.Item as='Link'>Flashcards</Menu.Item>
            </Sidebar>
        </Sidebar.Pushable>
                
            
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