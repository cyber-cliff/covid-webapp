let patients = JSON.parse(document.getElementById('patients-data').textContent);
console.log(patients)


function fcn (e) {
    let key = e.toUpperCase();
    let patient = patients[key]
    const header = `
        <h4 class="modal-title" style="color: white">Case: ${key}</h4>

        <div>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
    `;
    const markup = `
    <!-- Modal body -->
        <div class="container">
            <h5>${patient.age} Years Old / ${patient.sex == 'M' ? 'Male': 'Female'}</h5>
            <table class="table">
                <tbody>
                    <tr>
                        <td>Nationality</td>
                        <td>${patient.nationality}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td style="color: ${patient.status == "dead" ? 'red' : 'limegreen'}; font-weight: bold;">${patient.status.charAt(0).toUpperCase()  + patient.status.slice(1)}
                        </td>
                    </tr>
                    <tr>
                        <td>Since</td>
                        <td style="font-weight: bold;">${patient.lab_confirmation_date}</td>
                    </tr>
                    <tr>
                        <td>Transmission Type</td>
                        <td style="font-weight: bold;">${patient.transmission}</td>
                    </tr>
                    <tr>
                        <td>Official Confirmation</td>
                        <td style="font-weight: bold;">DOH Press Release</td>
                    </tr>
                    <tr>
                        <td
                            style="background-color: #66B2FF; font-weight: bold; color: cornsilk;">
                            Other Details
                        </td>
                        <td style="background-color: #66B2FF">
                        </td>

                    </tr>
                    <tr>
                        <td>Resident of</td>
                        <td style="font-weight: bold;">${patient.residence_city_mun}</td>
                    </tr>
                    <tr>
                        <td>
                            Symptoms 
                        </td>
                        <td>
                            <div class="container">
                                <h5>
                                ${patient.symptoms.map((item, i) => `
                                    <span class="badge badge-secondary"
                                            style="background-color: #bd574e;">${item}</span>
                                `).join('')}
                                
                                </h5>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td>Other Condition</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Travel History</td>
                        <td style="font-weight: bold;">Yes</td>
                    </tr>
                    <tr>
                        <td>Latest Travel Route</td>
                            
                        <td><div class="container">
                        <h5>
                            <span class="badge badge-secondary"
                                style="background-color: #587850;">${patient.country_visited_0}</span>
                            <span class="badge badge-secondary"
                                style="background-color: #709078;">${patient.country_visited_1}</span>
                            <span class="badge badge-secondary"
                                style="background-color: #78b0a0;">${patient.country_visited_2}</span>

                        </h5>
                    </div></td>
                        
                    </tr>
                    <tr>
                        <td>Possible link to</td>
                        <td>
                            <div class="container">
                                <h5>
                                ${patient.exposure_link.map((item, i) => `
                                    <span class="badge badge-secondary"
                                            style="background-color: #61c0bf;">${item}</span>
                                `).join('')}
                                
                                </h5>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Relation</td>
                        <td style="font-weight: bold;">${patient.exposure}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    $('.modal-header').html(header);
    $('.modal-body').html(markup);
    $('#myModal').modal('show');
}