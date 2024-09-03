import { Component } from 'react';
import css from '../../styles.css';

class Searchbar extends Component {
  state = {
    inputName: '',
  };

  changeInput = e => {
    this.setState({ inputName: e.currentTarget.value });
  };
  onSubmit = e => {
    e.preventDefault();
    
    this.setState({ inputName: '' });
  };

  render() {
    const { inputName } = this.state;
    return (
      <div className={css.Searchbar}>
        <header className="searchbar">
          <form className={css.Form} onSubmit={this.onSubmit}>
            <button type="submit" className={css.Button}>
              <span className={css.ButtonLabel}>Search</span>
            </button>

            <input
              value={inputName}
              className={css.Input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.changeInput}
            />
          </form>
        </header>
      </div>
    );
  }
}
export default Searchbar;
