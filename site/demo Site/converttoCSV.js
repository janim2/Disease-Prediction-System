<form name="xyz_form">
    <section class="border-bottom">
<div class="content">
    <h3>ID Number</h3>
    <div class="form-control-group">
        <div class="form-control form-control-number">
            <input type="number" id="id_number">
        </div>
    </div>
            <h3>First Name</h3>
    <div class="form-control-group">
        <div class="form-control form-control-text">
            <input type="text" id="first_name">
        </div>
    </div>
</div><!--.content-->
    <section class="data-capture-buttons one-buttons">
       <div class="content">
          <input type="submit" value="Submit" onClick="javascript:addToCSVFile()">
       </div>
    </section><!--.data-capture-buttons-->
The Javascript is in the header of the html file and it is:

<script type="text/javascript">
        function addToCSVFile() {
            var csvData = new Array();  // To collect the names
            var csvFilePath = "Data.csv"; // File name

            // Collect General Information
            csvData[0] = document.getElementById('id_number').value;
            csvData[1] = document.getElementById('first_name').value;

              var fso = new ActiveXObject('Scripting.FileSystemObject');
            var oStream = fso.OpenTextFile(csvFilePath, 8, true, 0);
            oStream.WriteLine(csvData.join(','));
            oStream.Close();
            clearData();
            alert("Data Added Successfully");
     }

     function clearData() {
            document.getElementById('id_number').value = "";
            document.getElementById('first_name').value = "";
                     }
    </script>
