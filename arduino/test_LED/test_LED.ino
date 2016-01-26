// constants won't change. Used here to set a pin number :
const int ledPin =  13;      // the number of the LED pin

void setup() {
  pinMode(13, OUTPUT);
  digitalWrite(13, LOW);
  delay(1000);
  Serial.begin(9600);
}

void loop() {
  Serial.println("Yolo");
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}

