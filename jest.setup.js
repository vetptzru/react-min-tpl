import enzyme, { mount } from 'enzyme';
// import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

global.mount = mount;
