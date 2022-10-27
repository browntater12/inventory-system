
const Home = () => {

    function CreateButton(props) {
        return <a href={props.link}><button type="button" class="btn btn-primary btn-lg" style={{height: 80, width: 200, marginBottom: 20}}>{props.value}</button></a>;
      }

    return(
        <div className="home">
            <h1 style={{marginTop: 100}}>Inventory Management System</h1>
            <div class='container'>
                <div class='row align-items-center' style={{height: 700}}>
                    <div class='col'>
                        <CreateButton link='/checkin' value="Check-In"/>
                        <p>To add inventory to the warehouse.</p>
                    </div>
                    <div class='col'>
                        <CreateButton link='/checkout' value="Check-Out"/>
                        <p>To remove inventory from the warehouse.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
