import React from 'react';

class Footer extends React.Component {
    getYear() {
        return new Date().getFullYear()
    }
    render(){
        return (<footer class="fixed-bottom">
        <p>Copyright &copy;{this.getYear}. Fourtune LLC. All rights reserved.</p>
      </footer>);
    }
}
export default Footer