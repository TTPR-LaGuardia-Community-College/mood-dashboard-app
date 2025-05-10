function MoodStats({counts = 0}) {
    /* TODO #5
       - Calculate total votes
       - Determine percentages
       - Render a simple table or list
    */
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    if (counts === null) {
        return <MoodSection/>
    }
    const totalCounts = Object.values(counts).reduce(
        (a, b) =>
            a + b,
        0
    )


    function MoodList({counts}) {
        const emojis = {
            happy: '😊',
            tired: '😴',
            excited: '🤩',
            meh: '😐'
        }

        return <>
        <ul>
            {Object.entries(counts).map(([mood, vote]) => (

                <li key={mood}>
                    {emojis[mood]} {capitalize(mood)}:
                    {vote ? `${Math.round((vote / totalCounts) * 100)}%` : '_%'}
                </li>
            ))}
        </ul>
        </>
    }

    function MoodSection() {

        return (
            <>

            <section className="stats">
                <h2>Total votes: {totalCounts || '_'}</h2>

                {/*<ul>*/}
                {/*    <li>😊 Happy: _%</li>*/}
                {/*    <li>😴 Tired: _%</li>*/}
                {/*    <li>🤩 Excited: _%</li>*/}
                {/*    <li>😐 Meh: _%</li>*/}
                {/*</ul>*/}
                <MoodList counts={counts}/>
            </section>
            </>
        )
    }

    return (
        <MoodSection/>
    );
}

export default MoodStats