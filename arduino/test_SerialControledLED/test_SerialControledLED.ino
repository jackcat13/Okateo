#define DEBUG
#define NB_LEDS 6
#define TERMINATOR ';'


const int ledPinNumbers[NB_LEDS] = {
  18, 19, 20, 21, 22, 23
};
bool ledStatus[NB_LEDS];

///////////////////////////
// FUNCTIONS //////////////
///////////////////////////
void initializeLEDs();
String readFromSerial();
void switchLed (int ledToSwitch);

//////////////////////
// SETUP /////////////
//////////////////////
void setup() {
  Serial.begin(9600);
  Serial.setTimeout(10);
  initializeLEDs();
}

////////////////////
// MAIN LOOP ///////
////////////////////
void loop() {
  String buf = readFromSerial();
  int ledToSwitch = -1;

  if(buf.length() > 0){
    ledToSwitch = buf.toInt();
    #ifdef DEBUG
    Serial.println(buf);
    #endif 
  }
  
  switchLed(ledToSwitch);
  
  delay(10);
}

void switchLed (int ledToSwitch){
  if(ledToSwitch >= 0){
    if(ledStatus[ledToSwitch]){
      digitalWrite(ledPinNumbers[ledToSwitch], LOW);
      ledStatus[ledToSwitch] = false;
    } else {
      digitalWrite(ledPinNumbers[ledToSwitch], HIGH);
      ledStatus[ledToSwitch] = true;
    }
  }
}

/**
 * Lit un message sur le port série
 */
String readFromSerial (){
  return Serial.readStringUntil(TERMINATOR);
}

/**
 * Initialise les pins pour les LEDs
 */
void initializeLEDs (){
  for(int i = 0; i < NB_LEDS; i++){
    ledStatus[i] = false;
    pinMode(ledPinNumbers[i], OUTPUT);
    digitalWrite(ledPinNumbers[i], LOW);
  }
}

