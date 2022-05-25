export function getHouseForm(){
  return `
  
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.housesController.createHouse()">
              <h3> List a House </h3>
                <div class="row">
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Make</label>
                    <input required type="text" name="address" id="address" placeholder="Enter the house address" maxlength="30"
                      minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
                      title="please enter the address">
                  </div>
                  
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Rooms</label>
                    <input required type="number" name="rooms" id="rooms" value="0" min="0" 
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Price</label>
                    <input required type="number" name="price" id="price"  min="0" class="form-control"
                      placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-6">
                    <label for="" class="form-label">Image Url</label>
                    <input required type="text" name="img" id="img" class="form-control" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  <div class="col-12 mb-2">
                    <label for="" class="form-label">description</label>
                    <input required type="text" name="description" id="description"
                      placeholder="Provide a house description" class="form-control" maxlength="75" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  
                </div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary px-3 py-2" title="List a House"><i
                    class="mdi mdi-plus"></i>
                  Create</button>
              </form>`
}