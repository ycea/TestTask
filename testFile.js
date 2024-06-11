
class TestClass{
	records;
	constructor(){
		this.records = JSON.parse(localStorage.getItem('records'));
		if(this.records == null){
			this.records = new Array();
		}
	} 
	compareRecords(first, second){
		if(first.header == second.header){
			return true;
		}
		if(first.desciprtion == second.desciprtion){
			return true;
		}
		return false;
	}
	addRecord(toAdd){
		if(typeof(toAdd) == "Record"){
			this.records.push(toAdd);
		}
	}
	removeRecord(deletable){
		for (let i = 0, len = this.records.length; i < len; i++) {
			if (this.compareRecords(this.records[i], deletable)) {
				this.records.splice(i, 1);
				break;
			}
		  }
	}
	getRecord(recordId){
		if(recordId > 0 && recordId < this.records.length){
			return this.records[recordId];
		}
		return null;
	}
	getRecords(){
		return this.records;
	}
	changeRecord(recordId, newRecord){
		if(recordId > 0 && recordId < this.records.length){
			this.records[recordId] = newRecord;
			return true;
		}
		return false;
	}
	saveRecords(){
		localStorage.setItem("records", JSON.stringify(this.records));
	}
}
class Record{
	header;
	desciprtion;
	creationTime;
	changeTime;
	isDone;
}