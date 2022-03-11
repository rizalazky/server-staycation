// btn edit category
console.log("OKE");
$('.btn-edit-cat').click(e=>{
    const { name,id }=e.target.dataset

    // $("#form-cat").attr("method", "PUT");
    $('#inp-cat-name').val(name);
    $('#inp-cat-id').val(id);
});

$('.form-delete').submit(function(){
    return confirm('Are you sure, you want to delete this data?')
})