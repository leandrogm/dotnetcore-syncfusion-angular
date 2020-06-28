using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication5.Controllers
{
    public class Tag
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
    [Route("api/[controller]")]
    [ApiController]
    public class TagsController : ControllerBase
    {
        // GET: api/<TagsController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new List<Tag>{
                new Tag
                {
                    Name = "Colesterol Alto",
                    Description = @"O nível de colesterol alto está diretamente ligado ao consumo excessivo de alimentos gordurosos. 
                                    Esse fator é muito prejudicial à saúde, pode levar ao infarto, e ainda aumenta o risco para o surgimento de doenças cardiovasculares.
                                    Segundo levantamento feito pelo IBGE, pelo menos 12,5% dos brasileiros, ou seja, 18,4 milhões de pessoas no país, 
                                    já foram diagnosticas com colesterol Alto."
                },
                new Tag
                {
                    Name = "DPOC (Doença pulmonar obstrutiva crônica)",
                    Description = @"Também chamada de enfisema ou bronquite crônica, a doença pulmonar obstrutiva crônica,
                                    é uma doença que causa dificuldades respiratórias pois provoca inflamação nos brônquios. 
                                    Também pode provocar tosse e catarro.
                                    Ela geralmente é ocasionada devido a constante inalação de fumaça ou gases que prejudicam a saúde, 
                                    em função disso é muito comum entre os fumantes."
                },
                new Tag
                {
                    Name = "Hipertensão",
                    Description = @"Hipertensão ou simplesmente pressão alta como é popularmente chamada, é uma doença que contrai os vasos sanguíneos, 
                                    forçando assim o coração a se esforçar mais em sua função.
                                    Os sintomas aparecem apenas quando a doença já prejudicou o organismo, incluem: dor de cabeça, tontura e mal-estar. 
                                    A hipertensão é capaz de desencadear vários outros problemas como doenças cardiovasculares, colesterol elevado, 
                                    infarto e derrame. Ao decorrer da pesquisa 31,3 milhões de pessoas afirmaram terem sido diagnosticadas com a doença."
                }
            });

        }

        // GET api/<TagsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TagsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TagsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TagsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
