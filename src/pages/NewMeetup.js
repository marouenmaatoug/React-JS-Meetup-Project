import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
    function addMeetupHandler(meetupData) {
        fetch(
            "https://react-js-meetup-project-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetup;
