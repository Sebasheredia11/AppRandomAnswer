import {shallowMount} from '@vue/test-utils';
import Indecision from '@/components/Indecision'

describe('indesision Component',()=>{

    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(Indecision)
    })

    test('Hacer snapshot con el HTML',()=>{

        const value = wrapper.html()
        expect (value).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada(Console.log)',()=>{

    })

    test('Al escribir signo de interrogacion se debe disparar el fetch',()=>{
        
    })

    test('Pruebas en getAnswer',()=>{
        
    })

    test('Pruebas en Get Answer - Fallo en el API',()=>{
        
    })
})