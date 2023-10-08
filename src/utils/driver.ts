// 文档在此：https://driverjs.com/docs/basic-usage
import { driver, DriveStep } from "driver.js";
import 'driver.js/dist/driver.css';

export interface ICDriverOptions {
    animate?: boolean,
    showProgress?: boolean,
    showButtons?: any,
    popoverClass?: string
    overlayColor?: string
}

class CDriver {
    public initDriver(steps: DriveStep[], options? : ICDriverOptions) {
        const originOps = {
            showButtons: ['next', 'previous', 'close'],
            showProgress: true,
        }
        const results = Object.assign({}, options, originOps)
        const dObj = driver({
            ...results,
            steps,
        });

        dObj.drive()
    }
}

const cDriver = new CDriver()

export default cDriver