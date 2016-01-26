package serialcomm;

import jssc.*;

public class SerialCommTest {

    public static void main (String[] args){
        SerialPort serial = new SerialPort("com3");
        try {
            serial.openPort();
            serial.setParams(SerialPort.BAUDRATE_9600,
                    SerialPort.DATABITS_8,
                    SerialPort.STOPBITS_1,
                    SerialPort.PARITY_NONE);
            serial.setFlowControlMode(SerialPort.FLOWCONTROL_RTSCTS_IN | SerialPort.FLOWCONTROL_RTSCTS_OUT);
            serial.addEventListener(new PortReader(serial), SerialPort.MASK_RXCHAR);
            serial.writeString("1;");
            serial.closePort();
        } catch (SerialPortException e) {
            e.printStackTrace();
        }
    }
}
