/*  
리팩터링을 하고나니 특정 클래스에남은 역할이 거의 없을 때 이런 현상이 자주 생긴다.
두 클래스의 기능을 지금과 다르게 배분하고 싶을 대도 클래스를 인라인한다. 클래스를 인라인 해서 하나로 합친 다음 새로운 클래스를 추출하는게 쉬울 수 있기 대문이다.
이는 코드를 재구성할 때 흔히 사용하는 방식이기도 한다.
*/

class TrackingInformation {
    private _shippingCompany: string | undefined
    private _trackNumber: string | undefined
    get shippingCompany() { return this._shippingCompany }
    set shippingCompany(arg) { this._shippingCompany = arg }
    get trackNumber() { return this._trackNumber }
    set trackNumber(arg) { this._trackNumber = arg }
    get display() {
        return `${this.shippingCompany}: ${this.trackNumber}`
    }
}


class Shipment {
    private _trackingInformation: TrackingInformation | undefined
    get trackingInfo() {
        return this._trackingInformation?.display;
    }
    get trackingInformation() { return this._trackingInformation }
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation
    }
}

export function clientA() {
    const trackingInformation = new TrackingInformation()
    trackingInformation.shippingCompany = 'shippingCompany'
    trackingInformation.trackNumber = 'trackNumber'
    const shipment = new Shipment()
    shipment.trackingInformation = trackingInformation
    return shipment.trackingInfo
}