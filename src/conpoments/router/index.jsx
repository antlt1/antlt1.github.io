import About from '../values/about';
import Contact from '../values/contact';
import MySkill from '../values/myskill';
import Login from '../../thuecode/admin/compoments/account/login';

const myValue = [
    { name: 'About', value: About},
    { name: 'MySkill', value: MySkill },
    { name: 'Contact', value: Contact },
]
const valAdmin = [
    { name:'Login', value: Login, root: '/login'}
]
export { myValue, valAdmin};