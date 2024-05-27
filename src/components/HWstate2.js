

import React from 'react';
function FancyBorder2(props) {//отвечает за рамочку
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {/* FancyBorder FancyBorder-blue стиль сss */}
        {props.children}
      </div>
    );
  }
  
  function Dialog2(props) {
    return (
      <FancyBorder2 color="green">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        {props.children}
        {/* //доступ к вложенному компоненту */}
      </FancyBorder2>
    );
  }
  


  export class SignUpDialog2 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        // name: '',img:'',description: ''
        products: this.props.items,//,берем из нашего айтемса которій в App.js через пропс
      };
      
    }
  


    // handleClick = (product, newImg) => {
    //   product.img = newImg;
    //   this.setState({ products: this.state.products });//сеттер для закрітого обьекта state
    // };
  
    
    render() {

      
    
      const productItem = {
        borderLeft: '1px solid #c0c0c0',
      borderRight: '1px solid #c0c0c0',
      };
      const productImg = {
        width: '225px', 
      };

      const text = {
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: 'rgb(65, 69, 251)',
        fontSize: 'smaller'
      };
  

      return (
        <Dialog2 title="">
          {/* input и button вложенніе дочерние єлементі для Dialog */}
        {this.state.products.map(product => (//map берет каждый обьект продукт и его деконструирует (обратно из сущности делает несколько).map=Перебор массива продуктов
              <div>
            <div style={productItem}>
            <img src={product.img} alt={product.name} style={productImg}/>
            <h3 style={text}>{product.name}</h3>
            {product.description ? product.description.split(',').map((description) => (
                <p style={text}>{description}</p>
              )) : null}
               {/* <button onClick={() => this.handleClick(product, 'котик.jpg')}>
                Изменить фотку
              </button> */}
            </div>
           
          </div>
        ))}

        </Dialog2>
      );
    }
  

  }
  