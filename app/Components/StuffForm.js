export function getStuffForm(){
  return `
  
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.stuffsController.addStuff()">
              <h3> List some Stuff </h3>
                <div class="row">

                  <div class="col-6">
                    <label for="" class="form-label">Image Url</label>
                    <input required type="text" name="img" id="img" class="form-control" placeholder=""
                      aria-describedby="helpId">
                  </div>

                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Title</label>
                    <input required type="text" name="title" id="title" placeholder="Enter what the stuff is" maxlength="30"
                      minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
                      title="please enter what the stuff is">
                  </div>
                  
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Condition</label>
                    <input required type="text" name="condition" id="condition" value="" placeholder="Enter the Stuff Condition"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>

                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Price</label>
                    <input required type="number" name="price" id="price"  min="0" class="form-control"
                      placeholder="" aria-describedby="helpId">
                  </div>
                  
                  <div class="col-9 mb-2">
                    <label for="" class="form-label">Description</label>
                    <input required type="text" name="description" id="description"
                      placeholder="Describe the Stuff" class="form-control" maxlength="75" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  
                </div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary px-3 py-2" title="List some Stuff"><i
                    class="mdi mdi-plus"></i>
                  Create</button>
              </form>`
}