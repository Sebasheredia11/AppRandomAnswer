import {shallowMount} from '@vue/test-utils';
import Indecision from '@/components/Indecision'

describe('indesision Component',()=>{

    let wrapper;
    let clSpy;

    global.fetch = jest.fn(()=> Promise.resolve({
        json: ()=> Promise.resolve({
            anser: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(()=>{

        wrapper = shallowMount(Indecision)

        clSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })

    test('Hacer snapshot con el HTML',()=>{
        
        const value = wrapper.html()
        expect (value).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada(Console.log)', async ()=>{
        
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')
        
        expect(clSpy).toHaveBeenCalledTimes(0)
        expect(getAnswerSpy).toHaveBeenCalled()

    })

    test('Al escribir signo de interrogacion se debe disparar el getAnswer', async ()=>{
        
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')

        expect( clSpy ).toHaveBeenCalledTimes(2)
        expect( getAnswerSpy ).toHaveBeenCalled()

    })

    test('Pruebas en getAnswer', async()=>{
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')

    })


})