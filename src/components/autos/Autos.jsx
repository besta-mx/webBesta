import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./autos.scss";

const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
  });

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
    <ThemeProvider theme={theme}>
        <Box sx={{  p: 1,
                    ml: 1,
                    justifyContent: "center", 
                    alignItems:"center",
                    border: 0
                     }}>
          <Typography>{children}</Typography>
        </Box>
    </ThemeProvider>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className="autos" id="autos">
          <h1>Elige el auto de tus sueños</h1>
              
        <Box
        sx={{
            
        }}
        >
        <Tabs
            orientation="scrollable"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            aria-label="Vertical tabs example"
            sx={{   p: 1,
                    borderRight: 1, 
                    border: 0, 
                    justifyContent: "center",
                    alignItems: "center", 
                }}
        >
            <Tab label="V-Drive" {...a11yProps(0)} />
            <Tab label="March" {...a11yProps(1)} />
            <Tab label="Aveo" {...a11yProps(2)} />
            <Tab label="Attitude" {...a11yProps(3)} />

        </Tabs>
        <TabPanel value={value} index={0}>
            <div className="unidad">
                <h5>Nissan</h5>
                <h2>V-DRIVE</h2>    
                <img src="assets/yearCalendar.png" className="imgAuto" alt="calendario"/>
                <p className="descAuto"> 2022</p>
                <img src="assets/estandaricono.png" className="imgAuto" alt="transmición"/>
                <p className="descAuto"> Estándar</p>
                <img src="assets/nuevoicono.png" className="imgAuto" alt="uso"/>
                <p className="descAuto"> Nuevo</p>
            </div>
            <div className="plazo">
                <h3>Plazo</h3>
                <p>36 Meses</p>
                <img src="assets/v-drive4.png" className="imgAutoGrande"alt="vdrive besta" /> 
                <div className="vehicle-card">
                <h4>Pago fijo semanal</h4>
                    <div className="v-drive-offer">
                        <div className="top">
                            <p className="precio"><b>$3,300</b></p>
                        </div>
                        <div className="bottomAutos">
                            <p className="iva">Incluye IVA</p>
                        </div>
                    </div>
                </div>
            </div>
                          
            <div className="deposito">
                <h3>Deposito en garantia</h3>
                <h3>$17,000</h3>
                <h6>*Consulta términos y condiciones</h6>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className="unidad">
                <h5>Nissan</h5>
                <h2>March Sense TM</h2>    
                <img src="assets/yearCalendar.png" className="imgAuto" alt="calendario"/>
                <p className="descAuto"> 2022</p>
                <img src="assets/estandaricono.png" className="imgAuto" alt="transmición"/>
                <p className="descAuto"> Estándar</p>
                <img src="assets/nuevoicono.png" className="imgAuto" alt="uso"/>
                <p className="descAuto"> Nuevo</p>
            </div>
            <div className="plazo">
                <h3>Plazo</h3>
                <p>36 Meses</p>
                <img src="assets/march2.png" className="imgAutoGrande" alt="March" />  
                <div className="vehicle-card">
                <h4>Pago fijo semanal</h4>
                    <div className="v-drive-offer">
                        <div className="top">
                            <p className="precio">$3,300</p>
                        </div>
                        <div className="bottomAutos">
                            <p className="iva">Incluye IVA</p>
                        </div>
                    </div>
                </div>
            </div>
                         
            <div className="deposito">
                <h3>Deposito en garantia</h3>
                <h3>$17,000</h3>
                <h6>*Consulta términos y condiciones</h6>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className="unidad">
                <h5>Chevrolet</h5>
                <h2>Aveo</h2>    
                <img src="assets/yearCalendar.png" className="imgAuto" alt="calendario"/>
                <p className="descAuto"> 2022</p>
                <img src="assets/estandaricono.png" className="imgAuto" alt="transmición"/>
                <p className="descAuto"> Estándar</p>
                <img src="assets/nuevoicono.png" className="imgAuto" alt="uso"/>
                <p className="descAuto"> Nuevo</p>
            </div>
            <div className="plazo">
                <h3>Plazo</h3>
                <p>36 Meses</p>
                <img src="assets/aveo2.png" className="imgAutoGrande" alt="Aveo" /> 
                <div className="vehicle-card">
                <h4>Pago fijo semanal</h4>
                    <div className="v-drive-offer">
                        <div className="top">
                            <p className="precio">$3,300</p>
                        </div>
                        <div className="bottomAutos">
                            <p className="iva">Incluye IVA</p>
                        </div>
                    </div>
                </div>
            </div>
                        
            <div className="deposito">
                <h3>Deposito en garantia</h3>
                <h3>$17,000</h3>
                <h6>*Consulta términos y condiciones</h6>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
        <div className="unidad">
                <h5>Dodge</h5>
                <h2>Attitude</h2>    
                <img src="assets/yearCalendar.png" className="imgAuto" alt="calendario"/>
                <p className="descAuto"> 2022</p>
                <img src="assets/estandaricono.png" className="imgAuto" alt="transmición"/>
                <p className="descAuto"> Estándar</p>
                <img src="assets/nuevoicono.png" className="imgAuto" alt="uso"/>
                <p className="descAuto"> Nuevo</p>
            </div>
            <div className="plazo">
                <h3>Plazo</h3>
                <p>36 Meses</p>
                <img src="assets/attitude2.png" className="imgAutoGrande" alt="Aveo" /> 
                <div className="vehicle-card">
                
                <h4>Pago fijo semanal</h4>
                    <div className="v-drive-offer">
                        <div className="top">
                            <p className="precio">$3,300</p>
                        </div>
                        <div className="bottomAutos">
                            <p className="iva">Incluye IVA</p>
                        </div>
                    </div>
                </div>
            </div>
                            
            <div className="deposito">
                <h3>Deposito en garantia</h3>
                <h3>$17,000</h3>
                <h6>*Consulta términos y condiciones</h6>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
        </TabPanel>
        </Box>
    </div>
  );
}
