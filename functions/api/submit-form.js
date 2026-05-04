const VALID_CODES = new Set([
  'IRATI-XAJI','IRATI-0Y6D','IRATI-PBHS','IRATI-AHXT','IRATI-HV3A','IRATI-3ZMF','IRATI-8MDD',
  'IRATI-4V30','IRATI-T9NT','IRATI-3W5U','IRATI-ZBIK','IRATI-CIDK','IRATI-WNNH','IRATI-J7XV',
  'IRATI-G0FN','IRATI-9XUY','IRATI-41IB','IRATI-LJH7','IRATI-5LXO','IRATI-6QJI','IRATI-UJV6',
  'IRATI-OH9S','IRATI-DBDW','IRATI-2PCN','IRATI-9T84','IRATI-AZYT','IRATI-JXEP','IRATI-Q85J',
  'IRATI-SG65','IRATI-KXVF','IRATI-1T2T','IRATI-ALA7','IRATI-53LC','IRATI-58DR','IRATI-C11E',
  'IRATI-RTJ5','IRATI-PHT0','IRATI-HL9X','IRATI-PSEI','IRATI-MVIH','IRATI-CWI6','IRATI-4CIY',
  'IRATI-HE7U','IRATI-R23G','IRATI-DPPQ','IRATI-0Y9D','IRATI-OM5I','IRATI-GQPK','IRATI-I7P5',
  'IRATI-TB94','IRATI-874F','IRATI-RHOC','IRATI-N9J2','IRATI-QP89','IRATI-UZFK','IRATI-8UT0',
  'IRATI-CVS4','IRATI-F8CG','IRATI-VYIE','IRATI-6IVW','IRATI-PVS7','IRATI-HZIO','IRATI-YKL1',
  'IRATI-CQ99','IRATI-CHJ7','IRATI-55NF','IRATI-4ZW9','IRATI-XA3K','IRATI-X7EE','IRATI-DTJV',
  'IRATI-ZHWJ','IRATI-R64D','IRATI-PJA1','IRATI-WJ0T','IRATI-PAC5','IRATI-6T4U','IRATI-FEL6',
  'IRATI-246H','IRATI-ID25','IRATI-OWF7','IRATI-5935','IRATI-A0L7','IRATI-253J','IRATI-2D54',
  'IRATI-I3QK','IRATI-2IAG','IRATI-L58K','IRATI-XO9T','IRATI-7E8G','IRATI-8JDP','IRATI-0LVS',
  'IRATI-NUJZ','IRATI-A7TZ','IRATI-0YNC','IRATI-XLL4','IRATI-ZKLO','IRATI-OKEP','IRATI-7Y6W',
  'IRATI-KTAK','IRATI-PUXQ','IRATI-PHR6','IRATI-2GDS','IRATI-WM31','IRATI-YIHA','IRATI-IR4C',
  'IRATI-OWGZ','IRATI-RIXA','IRATI-11DP','IRATI-G8SB','IRATI-I4Q2','IRATI-Y9V8','IRATI-6WZS',
  'IRATI-3T60','IRATI-RJIW','IRATI-1SWJ','IRATI-CKJL','IRATI-TEIY','IRATI-ZCOT','IRATI-OHP6',
  'IRATI-VZ41','IRATI-NAM1','IRATI-48P0','IRATI-TVHH','IRATI-PBMY','IRATI-OFQE','IRATI-WAOU',
  'IRATI-AXEQ','IRATI-BNHL','IRATI-1N13','IRATI-JCAT','IRATI-9MX2','IRATI-X18H','IRATI-AFEY',
  'IRATI-UHZ1','IRATI-GV0E','IRATI-38DA','IRATI-LY8O','IRATI-ZCYW','IRATI-D14V','IRATI-E92M',
  'IRATI-PNSM','IRATI-43D8','IRATI-W3ZP','IRATI-08J3','IRATI-TRP0','IRATI-J43D','IRATI-5IQV',
  'IRATI-NB4G','IRATI-H2M5','IRATI-ZJA8','IRATI-DZR1','IRATI-YXR2','IRATI-DHYL','IRATI-URTP',
  'IRATI-0LZJ','IRATI-JEGE','IRATI-T1GH','IRATI-R09S','IRATI-KDGI','IRATI-GATJ','IRATI-9TZE',
  'IRATI-5R5U','IRATI-QPGB','IRATI-7R3O','IRATI-CWBF','IRATI-UK9E','IRATI-1V2I','IRATI-SQP4',
  'IRATI-9KWV','IRATI-08HH','IRATI-XFGC','IRATI-AQVK','IRATI-IZZQ','IRATI-Y72W','IRATI-X7PT',
  'IRATI-X63C','IRATI-FL0U','IRATI-KEYZ','IRATI-7SRC','IRATI-BPLJ','IRATI-D84U','IRATI-89YJ',
  'IRATI-B1QX','IRATI-6GVW','IRATI-RDML','IRATI-Y4LY','IRATI-K83T','IRATI-QLL8','IRATI-OS9X',
  'IRATI-TOGN','IRATI-1W1H','IRATI-T7PZ','IRATI-E9VI','IRATI-FTTD','IRATI-96QE','IRATI-3RZS',
  'IRATI-J49I','IRATI-TN7S','IRATI-55J2','IRATI-O7S3','IRATI-KKV9','IRATI-RFTM','IRATI-TTQL',
  'IRATI-GZUI','IRATI-1B0Z','IRATI-3NX3','IRATI-9RBS','IRATI-V55P','IRATI-SQ0O','IRATI-XFQ8',
  'IRATI-MYX4','IRATI-44NL','IRATI-Z15B','IRATI-CW79','IRATI-0PDW','IRATI-5PY6','IRATI-B2KN',
  'IRATI-FTU2','IRATI-GC5W','IRATI-I6FQ','IRATI-JJA2','IRATI-6YFP','IRATI-MVXP','IRATI-J4HN',
  'IRATI-RIUU','IRATI-9K9X','IRATI-JUY0','IRATI-BVR6','IRATI-K2VM','IRATI-WWYZ','IRATI-X4W6',
  'IRATI-XLPU','IRATI-0DK0','IRATI-GET8','IRATI-T63J','IRATI-3R30','IRATI-ME8F','IRATI-8409',
  'IRATI-82N2','IRATI-ATQY','IRATI-YV37','IRATI-DIA5','IRATI-U6HC','IRATI-36KO','IRATI-F8KR',
  'IRATI-D5EQ','IRATI-Y08P','IRATI-0FOD','IRATI-RO8B','IRATI-NP84','IRATI-DYT9','IRATI-MOGE',
])

const WEB3FORMS_KEY = 'c973f72c-8134-4ab8-a197-741e27452704'

export async function onRequestPost(context) {
  try {
    const { nombre, apellido, email, detalles, codigo } = await context.request.json()

    let codigoInfo = 'No introducido'

    if (codigo && codigo.trim()) {
      const codeUpper = codigo.toUpperCase().trim()

      if (!VALID_CODES.has(codeUpper)) {
        codigoInfo = `${codeUpper} → INVÁLIDO`
      } else {
        const usageStr = await context.env.CODE_USAGE.get(codeUpper)
        const usage = usageStr ? parseInt(usageStr) : 0

        if (usage >= 2) {
          codigoInfo = `${codeUpper} → AGOTADO (ya usado 2 veces)`
        } else {
          await context.env.CODE_USAGE.put(codeUpper, String(usage + 1))
          codigoInfo = `${codeUpper} → VÁLIDO (uso ${usage + 1}/2) — APLICAR DESCUENTO`
        }
      }
    }

    const web3Res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Reserva de ${nombre} ${apellido}`,
        from_name: `${nombre} ${apellido}`,
        replyto: email,
        Nombre: nombre,
        Apellido: apellido,
        Email: email,
        Detalles: detalles,
        'Código de descuento': codigoInfo,
      }),
    })

    if (!web3Res.ok) return Response.json({ error: true }, { status: 500 })
    return Response.json({ success: true })
  } catch {
    return Response.json({ error: true }, { status: 500 })
  }
}
