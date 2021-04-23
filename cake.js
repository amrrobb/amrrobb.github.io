let crudApp = new function () {

    // AN ARRAY OF JSON OBJECTS WITH VALUES.
    this.listCake = [
        { ID: '1', Cake_Name: 'Cupcakes Kids', Category: 'Kids', Price: 25.600},
        { ID: '2', Cake_Name: 'Cake Boys', Category: 'General Cake', Price: 56.000 },
        { ID: '3', Cake_Name: 'Cupcakes Girs', Category: 'Cupcakes', Price: 20.040 }
    ]

    this.category = ['Cupcakes', 'Costum Cake', 'General Cake', 'Girl Cake' , 'Kids'];
    this.col = [];

    this.createTable = function () {

        // EXTRACT VALUE FOR TABLE HEADER.
        for (let i = 0; i < this.listCake.length; i++) {
            for (let key in this.listCake[i]) {
                if (this.col.indexOf(key) === -1) {
                    this.col.push(key);
                }
            }
        }

        // CREATE A TABLE.
        let table = document.createElement('table');
        table.setAttribute('id', 'cakeTable');     // SET TABLE ID.

        let tr = table.insertRow(-1);               // CREATE A ROW (FOR HEADER).

        for (let h = 0; h < this.col.length; h++) {
            // ADD TABLE HEADER.
            let th = document.createElement('th');
            th.innerHTML = this.col[h].replace('_', ' ');
            tr.appendChild(th);
        }

        // ADD ROWS USING JSON DATA.
        for ( i = 0; i < this.listCake.length; i++) {

            tr = table.insertRow(-1);           // CREATE A NEW ROW.

            for (let j = 0; j < this.col.length; j++) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = this.listCake[i][this.col[j]];
            }

            // DYNAMICALLY CREATE AND ADD ELEMENTS TO TABLE CELLS WITH EVENTS.

            this.td = document.createElement('td');

            // *** CANCEL OPTION.
            tr.appendChild(this.td);
            let lblCancel = document.createElement('label');
            lblCancel.innerHTML = '✖';
            lblCancel.setAttribute('onclick', 'crudApp.Cancel(this)');
            lblCancel.setAttribute('style', 'display:none;');
            lblCancel.setAttribute('title', 'Cancel');
            lblCancel.setAttribute('id', 'lbl' + i);
            this.td.appendChild(lblCancel);

            // *** SAVE.
            tr.appendChild(this.td);
            let btSave = document.createElement('input');

            btSave.setAttribute('type', 'button');      // SET ATTRIBUTES.
            btSave.setAttribute('value', 'Save');
            btSave.setAttribute('id', 'Save' + i);
            btSave.setAttribute('style', 'display:none;');
            btSave.setAttribute('onclick', 'crudApp.Save(this)');       // ADD THE BUTTON's 'onclick' EVENT.
            this.td.appendChild(btSave);

            // *** UPDATE.
            tr.appendChild(this.td);
            let btUpdate = document.createElement('input');

            btUpdate.setAttribute('type', 'button');    // SET ATTRIBUTES.
            btUpdate.setAttribute('value', 'Update');
            btUpdate.setAttribute('id', 'Edit' + i);
            btUpdate.setAttribute('style', 'background-color:#44CCEB;');
            btUpdate.setAttribute('onclick', 'crudApp.Update(this)');   // ADD THE BUTTON's 'onclick' EVENT.
            this.td.appendChild(btUpdate);

            // *** DELETE.
            this.td = document.createElement('th');
            tr.appendChild(this.td);
            let btDelete = document.createElement('input');
            btDelete.setAttribute('type', 'button');    // SET INPUT ATTRIBUTE.
            btDelete.setAttribute('value', 'Delete');
            btDelete.setAttribute('style', 'background-color:#ED5650;');
            btDelete.setAttribute('onclick', 'crudApp.Delete(this)');   // ADD THE BUTTON's 'onclick' EVENT.
            this.td.appendChild(btDelete);
        }


        // ADD A ROW AT THE END WITH BLANK TEXTBOXES AND A DROPDOWN LIST (FOR NEW ENTRY).

        tr = table.insertRow(-1);           // CREATE THE LAST ROW.

        for (let j = 0; j < this.col.length; j++) {
            let newCell = tr.insertCell(-1);
            if (j >= 1) {

                if (j == 2) {   // WE'LL ADD A DROPDOWN LIST AT THE SECOND COLUMN (FOR Category).

                    let select = document.createElement('select');      // CREATE AND ADD A DROPDOWN LIST.
                    select.innerHTML = '<option value=""></option>';
                    for (k = 0; k < this.category.length; k++) {
                        select.innerHTML = select.innerHTML +
                            '<option value="' + this.category[k] + '">' + this.category[k] + '</option>';
                    }
                    newCell.appendChild(select);
                }
                else {
                    let tBox = document.createElement('input');          // CREATE AND ADD A TEXTBOX.
                    tBox.setAttribute('type', 'text');
                    tBox.setAttribute('value', '');
                    newCell.appendChild(tBox);
                }
            }
        }

        this.td = document.createElement('td');
        tr.appendChild(this.td);

        let btNew = document.createElement('input');

        btNew.setAttribute('type', 'button');       // SET ATTRIBUTES.
        btNew.setAttribute('value', 'Create');
        btNew.setAttribute('id', 'New' + i);
        btNew.setAttribute('style', 'background-color:#207DD1;');
        btNew.setAttribute('onclick', 'crudApp.CreateNew(this)');       // ADD THE BUTTON's 'onclick' EVENT.
        this.td.appendChild(btNew);

        let div = document.getElementById('container');
        div.innerHTML = '';
        div.appendChild(table);    // ADD THE TABLE TO THE WEB PAGE.
    };

    // ****** OPERATIONS START.

    // CANCEL.
    this.Cancel = function (oButton) {

        // HIDE THIS BUTTON.
        oButton.setAttribute('style', 'display:none; float:none;');

        let activeRow = oButton.parentNode.parentNode.rowIndex;

        // HIDE THE SAVE BUTTON.
        let btSave = document.getElementById('Save' + (activeRow - 1));
        btSave.setAttribute('style', 'display:none;');

        // SHOW THE UPDATE BUTTON AGAIN.
        let btUpdate = document.getElementById('Edit' + (activeRow - 1));
        btUpdate.setAttribute('style', 'display:block; margin:0 auto; background-color:#44CCEB;');

        let tab = document.getElementById('cakeTable').rows[activeRow];

        for (i = 0; i < this.col.length; i++) {
            let td = tab.getElementsByTagName("td")[i];
            td.innerHTML = this.listCake[(activeRow - 1)][this.col[i]];
        }
    }


    // EDIT DATA.
    this.Update = function (oButton) {
        let activeRow = oButton.parentNode.parentNode.rowIndex;
        let tab = document.getElementById('cakeTable').rows[activeRow];

        // SHOW A DROPDOWN LIST WITH A LIST OF CATEGORIES.
        for (i = 1; i < 4; i++) {
            if (i == 2) {
                let td = tab.getElementsByTagName("td")[i];
                let ele = document.createElement('select');      // DROPDOWN LIST.
                ele.innerHTML = '<option value="' + td.innerText + '">' + td.innerText + '</option>';
                for (k = 0; k < this.category.length; k++) {
                    ele.innerHTML = ele.innerHTML +
                        '<option value="' + this.category[k] + '">' + this.category[k] + '</option>';
                }
                td.innerText = '';
                td.appendChild(ele);
            }
            else {
                let td = tab.getElementsByTagName("td")[i];
                let ele = document.createElement('input');      // TEXTBOX.
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', td.innerText);
                td.innerText = '';
                td.appendChild(ele);
            }
        }

        let lblCancel = document.getElementById('lbl' + (activeRow - 1));
        lblCancel.setAttribute('style', 'cursor:pointer; display:block; width:20px; float:left; position: absolute;');

        let btSave = document.getElementById('Save' + (activeRow - 1));
        btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;');

        // HIDE THIS BUTTON.
        oButton.setAttribute('style', 'display:none;');
    };


    // DELETE DATA.
    this.Delete = function (oButton) {
        let activeRow = oButton.parentNode.parentNode.rowIndex;
        this.listCake.splice((activeRow - 1), 1);    // DELETE THE ACTIVE ROW.
        this.createTable();                         // REFRESH THE TABLE.
    };

    // SAVE DATA.
    this.Save = function (oButton) {
        let activeRow = oButton.parentNode.parentNode.rowIndex;
        let tab = document.getElementById('cakeTable').rows[activeRow];

        // UPDATE listCake ARRAY WITH VALUES.
        for (i = 1; i < this.col.length; i++) {
            let td = tab.getElementsByTagName("td")[i];
            if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {  // CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
                this.listCake[(activeRow - 1)][this.col[i]] = td.childNodes[0].value;      // SAVE THE VALUE.
            }
        }
        this.createTable();     // REFRESH THE TABLE.
    }

    // CREATE NEW.
    this.CreateNew = function (oButton) {
        let activeRow = oButton.parentNode.parentNode.rowIndex;
        let tab = document.getElementById('cakeTable').rows[activeRow];
        let obj = {};

        // ADD NEW VALUE TO listCake ARRAY.
        for (i = 1; i < this.col.length; i++) {
            let td = tab.getElementsByTagName("td")[i];
            if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {      // CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
                let txtVal = td.childNodes[0].value;
                if (txtVal != '') {
                    obj[this.col[i]] = txtVal.trim();
                }
                else {
                    obj = '';
                    alert('all fields are compulsory');
                    break;
                }
            }
        }
        obj[this.col[0]] = this.listCake.length + 1;     // NEW ID.

        if (Object.keys(obj).length > 0) {      // CHECK IF OBJECT IS NOT EMPTY.
            this.listCake.push(obj);             // PUSH (ADD) DATA TO THE JSON ARRAY.
            this.createTable();                 // REFRESH THE TABLE.
        }
    }

}

crudApp.createTable();