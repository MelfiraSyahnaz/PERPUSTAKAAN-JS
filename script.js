var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["KodeBuku"] = document.getElementById("KodeBuku").value;
    formData["peminjam"] = document.getElementById("peminjam").value;
    formData["judul"] = document.getElementById("judul").value;
    formData["tglpinjam"] = document.getElementById("tglpinjam").value;
    return formData;
}
 
function insertNewRecord(data){
    var table = document.getElementById("listPeminjaman").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.empCode;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.salary;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.city;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a class="#" onClick="onEdit(this)">Edit</a>
        <a class="#" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
document.getElementById("KodeBuku").value = "";
document.getElementById("peminjam").value = "";
document.getElementById("judul").value = "";
document.getElementById("tglpinjam").value = "";

selectedRow = null;
}

function onEdit(td) {
selectedRow = td.parentElement.parentElement;
document.getElementById("KodeBuku").value = selectedRow.cells[0].innerHTML;
document.getElementById("peminjam").value = selectedRow.cells[1].innerHTML;
document.getElementById("judul").value = selectedRow.cells[2].innerHTML;
document.getElementById("tglpinjam").value = selectedRow.cells[3].innerHTML;


}
function updateRecord(formData) {
selectedRow.cells[0].innerHTML = formData.KodeBuku;
selectedRow.cells[1].innerHTML = formData.peminjam;
selectedRow.cells[2].innerHTML = formData.judul;
selectedRow.cells[3].innerHTML = formData.tglpinjam;


}

function onDelete(td) {
if (confirm('Delete selected data?')) {
row = td.parentElement.parentElement;
document.getElementById("listPeminjaman").deleteRow(row.rowIndex);
resetForm();
}
}