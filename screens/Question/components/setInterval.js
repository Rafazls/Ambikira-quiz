class TimerTest {
    cleared = false
    setInterval(callback, msInterval){
        if (!this.cleared){
            setTimeout(() => {
                callback()
                this.setInterval(callback, msInterval)
            }, msInterval)
        }
    }
    clearInterval(){
        this.cleared = true

    }
}
export default TimerTest