import React from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import { Box } from '@mui/system';
import Container from 'common/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { colors } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

import entrenamientoRelajacionCreativa from 'img/libros/relajacionCreativa.png';
import sabiduriaDeLasEmociones from 'img/libros/sabiduriaDeLasEmociones.png';
import creenciasDanianCreenciasSanas from 'img/libros/creenciasDanianCreenciasSanas.png';
import miedoAlBienestar from 'img/libros/miedoAlBienestar.jpg';
import laLlaveOlvidada from 'img/libros/laLlaveOlvidada.png';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Books = (props) => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Box>
            <Box marginBottom={4}>
              <Box
                component={Typography}
                fontWeight={700}
                color={theme.palette.secondary.main}
                fontStyle={'italic'}
                variant={'h4'}
                align={'center'}
                gutterBottom
                data-aos="fade-up"
              >
                Libros publicados por miembros del Equipo de la Escuela Granada.
              </Box>
            </Box>
            <Grid container spacing={2}>
              {[
                {
                  avatar: `${entrenamientoRelajacionCreativa}`,
                  title: 'Entrenamiento en Relajación Creativa - Dr. Herrero Lozano, Eugenio.',
                  description: [
                    'El Entrenamiento en Relajación Creativa es una técnica compuesta de una serie de ejercicios escalonados, que enseña a conseguir un estado de relajación, física y mental, y a desarrollar el uso de la imaginación en beneficio propio.',
                    'En el texto se encuentran las explicaciones y descripciones necesarias para la correcta comprensión de la técnica. La práctica de los ejercicios se realiza con la ayuda de la grabación, que contiene relajaciones y visualizaciones guiadas por el propio autor.',
                    'Además, en distintas partes del texto se dan sugerencia e indicaciones de cómo y para qué usar esta técnica: mejorar el rendimiento en el trabajo o los estudios; técnicas de autocuración y de incremento de la Salud Psicosomática; control de hábitos (tabaco, obesidad, timidez); eliminación de la angustia, tensión y estrés; como incrementar las capacidades para conseguir mejores resultados en cualquier actividad, etc.'
                  ],
                  date: '1987'
                },
                {
                  avatar: `${laLlaveOlvidada}`,
                  title: 'La llave olvidada. Consciencia creativa - Dr. Herrero Lozano, Julio y Rodríguez Valencia, Ángela',
                  description: [
                    'Buscador es el que busca”, define el diccionario. Quien se está buscando a sí mismo, habitualmente lo hace en el exterior: busca fuera el reflejo de la luz interna, que no es percibida directamente. Este libro describe el camino seguido por un grupo de “buscadores” hasta alcanzar “la llave de la Consciecnia”, una senda dirigida al interior del ser humano.',
                    'Un cuento sufí dice lo siguiente:',
                    `Alguien vio a Nasrudín buscando algo en el suelo, junto a una farola.


                    ¿Qué has perdido?. Le preguntó
                    Mi llave – dijo Nasrudín
                    
                    Fue así que ambos se arrodillaron para buscarla. Después de un rato sin que apareciese, el otro hombre preguntó:
                    ¿Dónde se te cayó exactamente?
                    En mi casa.
                    Entonces, ¿por qué buscas aquí?
                    Aquí hay más luz que dentro de mi casa.`
                  ],
                  date: '1999'
                },
                {
                  avatar: `${sabiduriaDeLasEmociones}`,
                  title: 'La Sabiduría de las Emociones. Entrenamiento en Consciencia Creativa - Dr. Herrero Lozano, Eugenio y Dr. Herrero Lozano, Julio',
                  description: [
                    '“Piensa bien y vivirás mejor”, en contra de la afirmación del célebre refrán, “piensa bien y acertarás”. Y ¿qué es “pensar bien”? No existe ningún “Código del Pensamiento” que nos diga cuál es la forma correcta.',
                    'Basándose en algunas descripciones y, sobre todo, en ejercicios prácticos ayudados de la grabación que acompaña al libro, se desarrolla un sistema de observación y toma de consciencia de los valiosos indicadores internos hacia el bienestar: las emociones como guía, pues dentro de cada uno existe una brújula individual, una gran “sabiduría de las emociones” que nos indica el “código personal del pensamiento”.',
                    'A través del entrenamiento para lograr el equilibrio en el cuerpo, las emociones y los pensamientos, se alcanza la mejoría cuerpo-mente o Salud Psicosomática, eficaz ante los problemas de ansiedad (estrés, angustia, inseguridad, timidez, fobias, obsesiones), tristeza (depresión, agotamiento físico e intelectual) y enfado, así como sus manifestaciones en problemas de relación y autoestima.',
                    'Las ideas condensadas en este libro – aprender a pensar correctamente – podrían ser materia de enseñanza en los centros de educación infantil, de esta forma se evitaría una enorme cantidad de sufrimiento inútil.',
                    'Este libro es la continuación de Entrenamiento en Relajación Creativa, primera obra del mismo autor, creador de ambas técnicas.'
                  ],
                  date: '2000'
                },
                {
                  avatar: `${creenciasDanianCreenciasSanas}`,
                  title: 'Creencias que dañan, creencias que sanan - Dr. Herrero Lozano, Julio',
                  description: [
                    'Al profundizar en el interior de uno mismo encontramos una amplia variedad de errores de pensamiento, que resumimos en cuatro ideas, origen de la mayor parte del sufrimiento de los seres humanos occidentales, las Creencias Dañinas : Maldad y Culpa, Falta de Valía, Vulnerabilidad o Debilidad y temor a la Soledad.',
                    'El problema se agrava con sus compensaciones sociales: “fingir” Bondad y Perfeccionismo, y “comprar” Seguridad y Compañía. Esta estructura gira en torno al núcleo central de nuestras angustias: el miedo a la muerte o a la disolución del yo y la falta de sentido de nuestra vida actual.',
                    'En este libro abordamos estos procesos con la intención de llegar a experimentar, en la práctica personal de cada uno, sus soluciones verdaderas, las Creencias Saludables: Bondad del egoísmo, Valía por ser, Seguridad Interior y Autosuficiencia, lo que nos permite llegar a conocer y entender el sentido de la vida, tanto genérico como individual.',
                    '“Piensa lo que deseas en lugar de lo que temes”.',
                    '“Acuérdate de ti, recuerda que puedes”',
                    '“Cuando sufres, tú te equivocas, y no porque seas malo, tonto ni culpable, sino por el único `pecado´ posible en el humano: ignorancia”.'
                  ],
                  date: '2004'
                },
                {
                  avatar: `${miedoAlBienestar}`,
                  title: 'Miedo al bienestar - Dr. Herrero Lozano, Julio',
                  description: [
                    '¿ Cómo es posible que conociendo y teniendo a nuestra disposición diversas herramientas para estar bien, aún continuemos encontrándonos mal con frecuencia ?',
                    'En general, la primera vez que aparece el malestar emocional nos sirve para obtener conocimiento..',
                    'En las siguientes ocasiones la repetición del mismo surge al intentar protegernos de algún peligro imaginario o exagerado..',
                    'A este proceso es a lo que llamamos "miedo al bienestar", pues parece como si aqeullas personas que iban avanzando hacia la mejoría se hubiesen asustado y retrocedían al aproximarse al bienestar.',
                    'También podríamos denominarlo "miedo a la responsabilidad", a ser adulto, a dejar de ser niño para pasar a asumir las responsabilidades maduras.',
                    'En resumen, miedo a vivir plenamente.'
                  ],
                  date: '2019'
                },
              ].map((item, i) => (
                <Grid item xs={12} key={i} data-aos={'fade-up'}>
                  <Box
                    component={Card}
                    display={'flex'}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    variant={'outlined'}
                    padding={2}
                    boxShadow={0}
                    bgcolor={'transparent'}
                    border={0}
                    sx={{
                      transition: 'all .2s ease-in-out',
                      '&:hover': {
                        transform: `translateY(-${theme.spacing(1 / 2)})`,
                      },
                    }}
                  >
                    <Box
                      component={CardMedia}
                      width={'100%'}
                      height={'100%'}
                      minHeight={260}
                      minWidth={170}
                      maxWidth={170}
                      image={item.avatar}
                      marginRight={-5}
                      zIndex={1}
                    />
                    <Box
                      component={CardContent}
                      bgcolor={'transparent'}
                      marginTop={-5}
                    >
                      <Box component={Card} borderRadius={2} paddingLeft={{ xs: 0, md: 4 }} boxShadow={'8px 8px 8px 0px rgb(140 152 164 / 25%)'}>
                        <CardContent>
                          <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            align={'center'}
                          >
                            <Box>
                              <Typography variant={'subtitle2'}>
                                {item.date}
                              </Typography>
                            </Box>
                          </Box>
                          <Box marginTop={1}>
                            <Typography variant={'h6'} gutterBottom>
                              <Box fontWeight={600}>{item.title}</Box>
                            </Typography>
                            <Grid container spacing={1}>
                              {item.description?.map((lesson, j) => (
                                <Grid item xs={12} key={j}>
                                  <Box
                                    component={ListItem}
                                    disableGutters
                                    width={'auto'}
                                    padding={0}
                                  >
                                    {/* <Box
                                      component={ListItemAvatar}
                                      minWidth={'auto !important'}
                                      marginRight={2}
                                    >
                                      <ArrowRightIcon color={"secondary"}/>
                                    </Box> */}
                                    <ListItemText primary={lesson} />
                                  </Box>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        </CardContent>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

        </Container>
      </Box>
    </Box>
  )
}

export default Books;