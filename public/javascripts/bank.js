// btn edit category
console.log("OKE");
$('.btn-edit-bank').click(e=>{
    const { name,id,namebank,nomerrekening }=e.target.dataset
    
    let href=$("#form-bank").attr("action");
    console.log(href,"href");
    console.log(e.target.dataset);

    $("#form-bank").attr("action",href + '?_method=PUT');
    
    $('#inp-bank-namebank').val(namebank);
    $('#inp-bank-nomerrekening').val(nomerrekening);
    $('#inp-bank-name').val(name);
    $('#inp-bank-id').val(id);
});

$('.form-delete').submit(function(){
    return confirm('Are you sure, you want to delete this data?')
})