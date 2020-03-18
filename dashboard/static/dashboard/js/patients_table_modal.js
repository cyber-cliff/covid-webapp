let patients = JSON.parse(document.getElementById('patients-data').textContent);
console.log(patients)


function fcn (e) {
    let key = e.toUpperCase();
    let patient = patients[key]
    const header = `
        <h4 class="modal-title">Case: ${key}</h4>

        <div>
            <button type="button" class="btn btn-outline-primary"><i
                    class="fas fa-angle-left"></i>
                Previous</button>
            <button type="button" class="btn btn-outline-primary">Next <i
                    class="fas fa-angle-right"></i></button>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
    `;
    const markup = `
    <!-- Modal body -->
        <div class="container">
            <h2>${patient.age} Years Old / ${patient.sex}</h2>
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
                            Symptoms <div class="container">
                                <h5><span class="badge badge-secondary"
                                        style="background-color: lightpink;">Cough</span>
                            </div>
                        </td>
                        <td></td>

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
                        <td>Travel Route
                            <div class="container">
                                <h5><span class="badge badge-secondary"
                                        style="background-color: lightpink;">Wuhan</span>
                                    <span class="badge badge-secondary"
                                        style="background-color: lightpink;">Hong
                                        Kong</span>
                                    <span class="badge badge-secondary"
                                        style="background-color: lightpink;">Cebu</span>
                                    <span class="badge badge-secondary"
                                        style="background-color: lightpink;">Dumaguete</span>
                                    <span class="badge badge-secondary"
                                        style="background-color: lightpink;">Manila</span>
                                </h5>
                            </div>
                        <td></td>
                        </td>
                    </tr>
                    <tr>
                        <td>Possible link to</td>
                        <td style="font-weight: bold;">PH 2</td>
                    </tr>
                    <tr>
                        <td>Relation</td>
                        <td style="font-weight: bold;">Wife</td>
                    </tr>
                    <tr>
                        <td>
                            Other Information
                            <div class="container">
                                <span class="text" style="font-weight: bold;">First
                                    case of COVID-19 in
                                    Philippines</span>
                            </div>
                        <td></td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    $('.modal-header').html(header);
    $('.modal-body').html(markup);
    $('#myModal').modal('show');
}