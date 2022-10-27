const CheckOut = () => {
    return(
        <div className="checkout">
            <h1 style={{marginTop: 100}}>Move Inventory Out of Warehouse</h1>
            <div class='container'>
                <div class='row'>
                    <div class="col-4 offset-md-4">
                        <label for="exampleFormControlInput1" class="form-label">Type</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Chair" />
                    </div>
                    </div>
                <div class='row'>
                    <div class="col-4 offset-md-4">
                        <label for="exampleFormControlInput1" class="form-label">Color</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Red"/>
                    </div>
                </div>
                <div class='row'>
                    <div class="col-4 offset-md-4">
                        <label for="exampleFormControlInput1" class="form-label">Material</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Wood"/>
                    </div>
                </div>
                <div class='row'>
                    <div class="col-4 offset-md-4">
                        <label for="exampleFormControlInput1" class="form-label">Quantity</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="1"/>
                    </div>
                </div>
                <div class='row'>
                    <div class="col-4 offset-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">Defects/ Problems</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Dents on sitting area"></textarea>
                    </div>
                </div>
            </div>
            <div class='btn-group' style={{marginTop: 40 }}>
                <div class='row'>
                    <div class='col'>
                        <button type="button" class="btn btn-primary" style={{height: 50, width: 150}}>Check Out</button>
                    </div>
                    <div class='col'>
                        <button type="button" class="btn btn-danger" style={{height: 50, width: 150}}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;