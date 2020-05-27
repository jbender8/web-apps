describe('Test weather', () => {
    it('should display 73', () => {
        browser.url('http://localhost:3000/')
        const elem = $(() => document.getElementById('temperature'));
        const text = elem.getText();
        expect(text).toBe('73');
    })
    it('should be orange', () => {
        browser.url('http://localhost:3000/')
        const elem = $(() => document.getElementById('temperature'));
        const color = elem.getCSSProperty('color');
        const hex = color['parsed']['hex']
        console.log(color['parsed']['hex']);
        expect(hex).toContain("#ffa500");
    })
})