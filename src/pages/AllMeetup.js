import MeetupList from "../components/meetups/MeetupList";
import classes from "./allmeetup.module.css";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg/1200px-Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg',
        address: 'Tokyo Shibuya',
        description: 'This is a first amazing meetup which you definitely should not miss.'
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvWW_SOCwM1qlA4zMqI5p8_AgJfMM68PDE-hcP0cTs9cvCuH51G4-D9cF9B48MzkCjJM&usqp=CAU',
        address: 'Seattle Library',
        description: 'This is a second amazing meetup which you definitely should not miss.'
    },
]

function AllMeetupsPage() {
    return <section>
            <div className={classes.section_title}><h1>All Meetups</h1></div>
            <MeetupList meetups={DUMMY_DATA}/>
        </section>
}

export default AllMeetupsPage;