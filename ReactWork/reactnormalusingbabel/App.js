const parent = document.getElementById('parent');

const root=ReactDOM.createRoot(parent);
// const h2 = React.createElement("h1",{},"Abes college")
// const l1 = React.createElement("li",{},"React");
// const l2 = React.createElement("li",{},"Java");
// const l3 = React.createElement("li",{},"Python");
// const list = React.createElement("ul",{},[l1,l2,l3]);
// const img = React.createElement('img',{src:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",style :{width : '200px',borderRadius : '50%'}});
// const name = React.createElement('h2',{},"Pratik singh");
// const right = React.createElement('div',{},[name,list]);
// const info = React.createElement('div',{style :{display : 'flex',alignItems : 'center',gap : '10px'}},[img,right]);
// const div = React.createElement('div',{},[h2,info]);

const h21 = <div>
    <h1>Abes college</h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" style={{ width: '200px', borderRadius: '50%' }} />
        <div>
            <h2>Pratik singh</h2>
            <ul>
                <li>React</li>
                <li>Java</li>
                <li>Python</li>
            </ul>
        </div>
    </div>   
</div>
root.render(h21);