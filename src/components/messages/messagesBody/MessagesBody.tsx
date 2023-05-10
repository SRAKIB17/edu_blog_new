import React from 'react';
import ClockSVG from '@/src/components/SVG/ClockSVG'
import DocsSVG from '@/src/components/SVG/DocsSVG'
import DeleteSVG from '@/src/components/SVG/DeleteSVG'
import CloudDownloadSVG from '@/src/components/SVG/CloudDownloadSVG'
import AttachmentSVG from '@/src/components/SVG/AttachmentSVG'
import MiceVoiceSpeakerSVG from '@/src/components/SVG/MiceVoiceSpeakerSVG'
import Loading from '@/src/components/loading/Loading'
import AudioRecord from '@/src/components/messages/messagesBody/AudioRecord'
import MessagesBodyTextarea from './MessagesBodyTextarea';
import SettingsSVG from '../../SVG/SettingsSVG';

const MessagesBody = () => {
    return (
        <>
            <div className=' border-b border-color flex items-center justify-between sm:px-4'>
                <div className='p-3 flex items-center gap-1'>
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80"
                        alt="" className="members-user " />
                    <h2 className="user-full-name">
                        Natalie Smith
                    </h2>
                </div>
                <div className='pr-2 sm:pr-0'>
                    <button className='buttonSvg'>
                        <SettingsSVG />
                    </button>
                </div>
            </div>
            <div className=' flex flex-col justify-between msg_body' >
                <div className='sm:px-6 p-2 overflow-auto '  >
                    <div>
                        <div className='flex items-center'>
                            <div>
                                <input type="checkbox" name="msg" id="message" className="checkbox-choice" />
                                <label htmlFor="message"></label>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="user-full-name">
                                    Natalie Smith
                                </h2>
                                <div className="msg-date flex items-center gap-1">
                                    <span>
                                        <ClockSVG size='14' />
                                    </span>
                                    <span>
                                        10 min ago
                                    </span>
                                    <div className='pl-1 flex'>
                                        <span>
                                            <input type="checkbox" name="msg" id="sfd" className="message-seen-handle-checkbox" disabled={true} />
                                            <label htmlFor="sfd"></label>
                                        </span>
                                        <span>
                                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80"
                                                alt="" className="h-4 w-4 rounded-full border border-primary object-contain" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' pl-10 sm:pl-12'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae sint odit, fugiat dolorum eligendi cum voluptate ut suscipit quaerat modi. Aperiam ratione natus iusto. Dolore dicta facilis quod voluptatem!
                        </div>
                        <div className='pl-12'>
                            <div className='flex items-center gap-4 py-4 docs_message' >
                                <div className=" flex items-center gap-1">
                                    <DocsSVG />
                                    <div className="font-medium">Article.docx</div>
                                </div>
                                <div className='flex gap-2 download-delete-docs'>
                                    <button className='buttonSvg'>
                                        <DeleteSVG />
                                    </button>
                                    <button className='buttonSvg'>
                                        <CloudDownloadSVG />
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, sit iure, excepturi labore ad vero natus atque accusantium modi sint molestias eligendi. Officia similique quasi dolore officiis, cupiditate nemo voluptates.
                            Animi, ullam quas! Culpa corrupti tenetur, debitis suscipit aspernatur dignissimos quaerat quia quis molestiae dolores, beatae quibusdam iusto, inventore incidunt cumque fugit iste aut totam doloribus mollitia hic odit optio.
                            Cupiditate atque fuga voluptas, magni est natus esse amet voluptatem delectus mollitia exercitationem iste eum accusamus maxime explicabo nobis, in temporibus cum animi unde dignissimos aliquid vitae? Harum, molestias distinctio?
                            Veritatis voluptas fuga voluptates maxime culpa laboriosam nemo consequuntur itaque nesciunt corrupti? Dignissimos atque repellat explicabo! Accusantium delectus in iste officiis ipsa eveniet adipisci itaque, dolorem, velit magnam quos. Molestias?
                            Et, quasi rerum adipisci saepe nulla dolorum optio ullam cumque, autem voluptatum placeat, iste fugiat accusantium quos excepturi impedit. Quasi vitae accusamus obcaecati nesciunt odio quaerat sunt dolorum perferendis iste!
                            Repellat pariatur velit natus nihil perspiciatis nam, doloremque ut ad nobis accusantium optio rem unde repellendus nemo repudiandae voluptas dolores laboriosam, provident possimus molestiae. Necessitatibus neque sint molestiae provident ab.
                            Dolor impedit, ea sint labore a repudiandae aperiam. Odit omnis libero voluptas et atque, officia expedita facere praesentium. Nostrum molestias harum possimus enim itaque numquam delectus esse omnis quasi dicta.
                            Fuga assumenda placeat quasi beatae enim ratione voluptate ab at facilis ipsa quos repellat corporis quidem, optio expedita earum, reiciendis consequuntur harum, minima aut illum. Vero odio vel doloremque quae!
                            Tempora nemo fugit perspiciatis cupiditate id autem rerum necessitatibus laudantium totam perferendis. Blanditiis itaque ea debitis? Exercitationem architecto, eligendi, reiciendis dolore voluptatibus temporibus, commodi dignissimos culpa sit placeat atque fugit?
                            Eligendi amet ut soluta neque praesentium at voluptatem officiis vero deserunt hic modi quibusdam voluptatibus, distinctio dicta obcaecati? Voluptatibus obcaecati laudantium delectus laboriosam modi tempora voluptatum libero sed, maxime sapiente.
                            Voluptas optio ullam modi labore consectetur soluta debitis maxime commodi aut pariatur itaque magnam expedita consequatur repudiandae at ipsa asperiores, nostrum quos quidem harum id sapiente eum sed. Vitae, omnis.
                            Saepe, blanditiis? Fugit nemo blanditiis perspiciatis, odio sequi laborum repellendus voluptates vero, optio dolores quaerat. Voluptas vitae deleniti eos deserunt voluptatum mollitia nesciunt temporibus, quia quos hic exercitationem. Voluptatum, esse?
                            Dicta architecto hic obcaecati impedit quisquam rem a, ab deserunt, necessitatibus blanditiis maxime officiis laudantium molestias eum accusamus libero beatae dolor? Consectetur dolorem ea accusantium unde beatae blanditiis adipisci vero?
                            Sequi pariatur nulla eligendi placeat illum quidem nesciunt quaerat officiis? Ipsa iusto repudiandae itaque maiores provident dolores et obcaecati expedita, quo error quasi atque ea officiis, assumenda at quisquam impedit!
                            Quisquam recusandae laboriosam quidem id dolorem. Quod quasi perferendis quibusdam impedit culpa quo vero minus, inventore deleniti, iste accusamus error doloribus reprehenderit aliquid voluptate. Voluptas, adipisci vitae. Nesciunt, enim adipisci?
                            Omnis placeat architecto distinctio dolor similique nesciunt, repellendus soluta incidunt temporibus repudiandae quod eos ipsa autem quisquam voluptatum aut expedita dolorem quae eveniet facere est beatae rerum fugit! Veniam, necessitatibus.
                            Hic totam doloremque ipsum reiciendis nostrum tempora beatae asperiores dolores, harum sunt? Nulla tenetur magnam qui in a, ipsum consectetur mollitia officiis, fugiat beatae sed, quos est consequuntur sint doloribus.
                            Distinctio culpa doloribus accusamus enim fugit nesciunt harum non quasi autem eos quam, recusandae repellat similique at? Sunt, accusamus voluptatibus necessitatibus, dolor et perspiciatis voluptate quisquam maiores quia totam cupiditate.
                            Odit cumque odio debitis quasi. Perferendis, dolores vitae delectus excepturi quidem harum ipsam consequuntur dicta explicabo enim tempora quibusdam nisi culpa voluptas voluptatum! Aliquam laboriosam sint odio laudantium maxime consequatur.
                            Officia modi nulla at ipsam sed accusantium repellendus rem sapiente earum! Ut architecto exercitationem adipisci delectus nobis, ab perspiciatis aut cumque reiciendis dolor cum reprehenderit aliquam debitis maiores quia soluta.
                            Explicabo repellat in aliquam dolorum aut. Officia quis eos laudantium praesentium dolores dolore sint aspernatur? Reiciendis repellendus minus dolor ipsam molestiae tenetur, fugit velit! Blanditiis laudantium ducimus dolore eveniet necessitatibus!
                            Vero cumque exercitationem vel enim velit aut perspiciatis nobis nisi earum harum beatae ratione delectus, eos ipsa itaque neque quas repellendus animi non perferendis? Optio quibusdam ipsa praesentium omnis quos.
                            Maxime officiis, sequi autem laboriosam ullam quaerat ipsum dolorem cum libero reprehenderit quisquam recusandae earum, aliquid, harum eaque perspiciatis. Cumque mollitia maiores hic illo nostrum culpa ullam itaque, omnis rerum.
                            Molestiae saepe sapiente, illo eaque architecto soluta blanditiis, magni sequi enim aperiam assumenda itaque ut, eum beatae ea vel. Officiis dolorum, praesentium rerum nisi a fugiat molestiae numquam est ea.
                            Exercitationem nesciunt molestias, repudiandae maiores expedita obcaecati dolores ratione corrupti, velit deleniti voluptatibus necessitatibus? Quis omnis ullam ut temporibus possimus laboriosam? Provident ipsam consequatur aperiam sequi architecto, numquam voluptas! Suscipit?
                            Adipisci fugiat ex sint rerum, illo perferendis laborum aperiam repudiandae? Quos corrupti modi vero, suscipit nemo numquam voluptas deleniti repellendus libero alias adipisci, pariatur asperiores repudiandae magnam labore delectus. Sint.
                            Reiciendis eveniet ad voluptatibus necessitatibus totam minima nulla, labore officiis beatae neque hic, voluptates architecto quas ducimus laudantium reprehenderit nam? Aut iusto maxime placeat aspernatur iste vel sint earum reprehenderit?
                            Modi atque suscipit recusandae nulla consequatur minima unde ea. Impedit voluptatem deleniti provident similique deserunt saepe. Soluta similique aperiam et? Autem ea corporis quasi. Nulla laborum dolorum repudiandae. Necessitatibus, veritatis.
                            Cumque quisquam, facilis ducimus repudiandae expedita sint repellendus dicta corporis corrupti earum culpa consectetur excepturi reprehenderit et voluptate atque officiis officia debitis minima hic. Modi quidem nisi cupiditate fugit officiis?
                            Sit quos soluta, corrupti at ut placeat recusandae aspernatur odio nemo quibusdam deserunt vitae veritatis quis aliquam nihil quas in quaerat. Molestias laudantium nesciunt accusantium itaque debitis cum aperiam ut?
                            Iusto veritatis sed tempore quidem aliquid culpa vitae quae reprehenderit dolore laborum! Explicabo, numquam quia voluptas corrupti, eligendi voluptates eos voluptatum est quidem similique fugit et omnis officiis repellat reiciendis?
                            Deserunt magnam, veniam doloremque quisquam recusandae dolore. Iure, in? Laudantium suscipit voluptates facere id, aperiam, distinctio doloribus culpa totam, rerum fugit at. Minus dolorum voluptates distinctio ducimus doloremque velit sed.
                            Quod voluptates fugit illo hic vero obcaecati dolores architecto quis? Officia aspernatur distinctio quibusdam laudantium quia accusantium inventore esse nostrum, at perferendis quae fugiat velit facere iusto consequuntur voluptate. Officiis!
                            Laborum asperiores, praesentium, fuga repellat tempore aliquid, minus ipsa omnis itaque eaque magnam! Rem molestias, ea, minus ullam totam recusandae ut, est autem sapiente earum accusantium aliquam eaque iure beatae!
                            Quo molestias iure cum tempore possimus sequi impedit delectus nam. Labore maxime nobis autem natus facilis obcaecati adipisci, a perferendis doloremque necessitatibus! Reprehenderit nemo fugit delectus asperiores necessitatibus, animi mollitia?
                            Dolorem quibusdam nesciunt illum minima itaque tempore optio autem ratione dolorum voluptatibus corrupti neque exercitationem sapiente dolores, expedita id, nisi earum voluptates? Sapiente recusandae, commodi totam doloremque deserunt facere minus?
                            Ducimus velit architecto, sit ea quasi fuga? Possimus, accusamus. Dicta ex sapiente voluptates in aspernatur, dolor nemo deleniti ipsum odit facilis, id quam nesciunt eos optio eum at quidem sed!
                            Dignissimos ratione maxime, libero est voluptas odio velit blanditiis. Quia esse nulla eligendi. Vitae, ex sint cupiditate dolor, veritatis debitis voluptatibus quibusdam autem error quasi reiciendis at laboriosam! Nesciunt, harum.
                            Officia quisquam aperiam harum consectetur provident ullam laboriosam possimus vero laudantium dolorum, corrupti magnam vitae cupiditate, quibusdam repudiandae veritatis id eos ex eligendi molestias. Repudiandae consectetur facere cum repellendus. Alias?
                            Sit error esse rem eius dolorem similique illum assumenda, vero eum illo. Numquam quas, neque qui quibusdam accusantium maiores, error in quae tempora velit, quasi assumenda labore nostrum ab est!
                            Iste quam quis autem eos nihil repellat, cum, facilis dolore, quaerat neque rem illum sunt facere suscipit eius animi maxime est vitae optio obcaecati quos. Expedita quam repellat dolor cum?
                            Maiores nam quasi quas hic, tempora doloribus qui voluptatum beatae quis impedit obcaecati minus, accusamus nostrum eum ullam a nemo ut vitae! A deleniti ratione iusto ipsam dolor aliquid reiciendis!
                            Deserunt labore incidunt repellendus voluptatem blanditiis, placeat voluptate dolorum perferendis voluptates doloremque modi soluta, enim rem qui ratione vitae debitis obcaecati id pariatur, ut est voluptatum quae. Doloribus, assumenda consequuntur!
                            Accusantium perspiciatis minima aut laudantium iure ab nihil ex, voluptate animi excepturi autem ad quaerat adipisci obcaecati deserunt a cum neque fugiat pariatur sunt hic assumenda magnam voluptas. Quae, itaque!
                            Quia, natus officiis, eius corrupti recusandae praesentium, esse voluptas pariatur soluta perferendis inventore alias repellat dolorum incidunt maxime? Voluptatem doloremque repellendus necessitatibus nam atque veniam maiores beatae alias provident totam.
                            Perferendis, consequuntur deserunt inventore quae temporibus officiis quibusdam, debitis, ipsum omnis molestiae voluptas cum maiores quod hic necessitatibus veniam ea! Quidem numquam ipsa eos! Porro impedit placeat veniam magnam asperiores!
                            Soluta placeat libero distinctio sequi officia facilis quaerat doloremque, natus totam exercitationem quod non expedita eaque quos tempore officiis dolore quae veritatis vero? Vel vero fugiat ea et iusto sequi.
                            Iusto harum at earum dolore blanditiis, id, vero illo facere voluptatem reiciendis excepturi! Doloremque rem libero dolor repellat. Dolorem ipsa ipsum magni ex quasi quaerat fugit harum labore quam maxime.
                            Temporibus aperiam, aliquam perspiciatis suscipit vero maxime cupiditate, cumque ducimus porro nulla quo natus! Corrupti facere libero itaque perspiciatis quibusdam ex, placeat consequuntur officia voluptate, porro, praesentium ab tempora nobis?
                            Commodi vitae nulla necessitatibus rem dolorum eum eveniet tempora corporis itaque iusto, voluptate a ratione saepe delectus sapiente excepturi aliquid placeat quis recusandae officiis quo deleniti ducimus autem! Neque, sed?
                            Deserunt perferendis nostrum commodi inventore labore doloremque debitis nesciunt enim aut iure nisi itaque, ut suscipit quo quod quae id corporis obcaecati quaerat porro. Hic neque iure illo autem ea!
                            Incidunt soluta non nisi architecto, fuga deserunt enim perferendis laboriosam vel tenetur ipsam fugit natus, commodi quasi itaque provident perspiciatis debitis. Facere blanditiis laborum, quod odio quaerat quasi itaque error.
                            Omnis dolores ipsum sequi vel minima animi eos, quia asperiores voluptas quas fuga aliquid? Earum blanditiis temporibus obcaecati, nisi reiciendis aliquam, rem quod possimus vitae consectetur ducimus explicabo repellendus illum!
                            Aliquam dignissimos odit, nam necessitatibus inventore ratione consequatur perferendis et repudiandae suscipit a soluta ut unde corporis! Molestias tenetur voluptas nam doloremque. Enim, cumque earum. Omnis, accusamus esse? Consectetur, iure!
                            Iusto deleniti pariatur recusandae praesentium, omnis dolores obcaecati illo totam dolorem, asperiores velit quas officiis inventore dolor at ducimus tenetur eaque porro placeat et. Accusamus incidunt fuga ullam quae eius?
                            Facilis hic eum laborum esse commodi ullam deleniti illum perferendis, beatae tempore necessitatibus delectus earum aliquam neque dolor nisi quis vel. Vitae voluptatum fugiat nisi repellat qui enim officiis doloribus!
                            Veritatis velit porro eaque harum, nobis inventore ex reiciendis tempora, rem, asperiores architecto dolores fugit aperiam ipsa corporis doloribus numquam aspernatur incidunt magnam! Ab dolore nobis nihil consequuntur, natus esse?
                            Quae dolor consequuntur quod rerum quasi repudiandae sapiente, itaque esse cum autem deleniti voluptatibus delectus eveniet dolore placeat quos voluptate mollitia aut praesentium distinctio odio nulla dolorum eligendi? Sit, deleniti.
                            Perferendis, enim. Modi repellendus quae qui sint quaerat porro, blanditiis aspernatur voluptate. Iusto veniam consequuntur, perspiciatis molestias facere et at, asperiores sit, maxime quam adipisci quasi incidunt aliquid atque earum?
                            Ipsa dolorem possimus itaque at dicta, minima laudantium sit tempora. Ut nulla, temporibus nesciunt dolore consequuntur, sit maiores, aperiam dolor dolorum pariatur ipsa animi totam assumenda sint ipsum eligendi culpa.
                            At, aliquam ipsa distinctio incidunt, dolore quibusdam odio, consectetur culpa voluptatum consequuntur animi illum veritatis adipisci expedita dolor debitis mollitia dolorem dolores perspiciatis nemo placeat libero repudiandae. Saepe, fuga tenetur.
                            Similique deserunt velit voluptatum numquam maxime facilis itaque minus quis autem voluptas dolore, fugiat alias aliquid, placeat commodi obcaecati, quod ab delectus blanditiis corporis? Corporis hic deserunt aspernatur est vero.
                            Pariatur similique labore deleniti odit veniam deserunt reiciendis accusantium a enim voluptas excepturi molestias ipsa soluta, quisquam esse, doloribus qui minima harum veritatis reprehenderit perspiciatis autem quae quod nesciunt. Animi!
                            Magni obcaecati, quam nulla soluta veniam nemo cumque numquam error fugit hic tempora eos iusto dignissimos ex dolore sapiente tenetur suscipit a perspiciatis! Nostrum eligendi dolores quis ad, corporis quam!
                            Deserunt quos unde provident quasi ab consequuntur asperiores doloribus velit at sit possimus molestiae, rem voluptatem ea nemo quam modi totam, beatae ipsum. Hic voluptates veritatis odit, quasi enim nulla?
                            Nobis, repellendus! Quisquam, similique aut? Dolor necessitatibus neque perspiciatis aut at tenetur consequuntur, eligendi pariatur exercitationem, magnam praesentium? Vero ipsum quo aliquid quos quis consequuntur quaerat earum, quidem ad aut!
                            Officiis minus quidem eum omnis suscipit ducimus iste dolorum repellendus reprehenderit recusandae possimus quam, molestiae inventore! Dolores quis ratione, dolore nulla ab unde aliquid dignissimos aut vero et deserunt quasi?
                            Fugit error magnam dolorem voluptate aut ratione placeat sit eos, beatae dignissimos velit neque animi dolores quos minus! Accusamus, atque! Necessitatibus laboriosam esse et distinctio porro voluptates a vero mollitia.
                            Natus nisi ab voluptas aliquam eveniet ipsum deserunt incidunt tenetur quisquam modi quam, nemo provident deleniti velit amet consequatur necessitatibus cum ex quidem harum corporis, quis sapiente, eligendi ut. Delectus?
                            Cumque, sint! Odit sequi impedit numquam dignissimos accusantium necessitatibus praesentium molestias possimus, aliquam cupiditate laudantium commodi modi distinctio amet ullam facere iste libero molestiae blanditiis eveniet eius animi facilis. Amet.
                            Quam, amet ipsa exercitationem distinctio labore odit laboriosam cupiditate. Corporis sapiente odio excepturi ducimus expedita at error, totam ipsam quis sit unde numquam, quam vel veniam consequatur enim quae commodi.
                            Enim dolores, velit saepe tenetur nam vel blanditiis maiores soluta labore, facilis rerum reiciendis voluptatibus, ex reprehenderit. Corporis molestias nesciunt labore est dolores explicabo, repellat natus iste fugit in corrupti?
                            Quasi, quae facere. Illo cupiditate aspernatur dolorem enim beatae quibusdam quasi, fuga reiciendis eligendi modi magnam dolore ut pariatur facilis corrupti voluptatum. Suscipit, eaque enim? Repellendus inventore necessitatibus iste quos.
                            Sit quasi ratione velit maiores amet placeat harum molestias veniam necessitatibus eligendi, pariatur libero corporis obcaecati, quo nemo repudiandae ex aliquam nisi reprehenderit ipsa. Quo eos ipsa earum vitae aspernatur.
                            Itaque earum dolores sint, natus aliquid aut nam nobis a neque inventore maxime. Possimus dolorum suscipit cum ipsam odio atque tempora ullam, sint repudiandae fuga vero inventore non, accusantium laborum?
                            Tempora laboriosam quo ipsa consequatur incidunt veniam accusamus molestias neque odio adipisci reprehenderit magnam itaque laborum, rem dolorum quibusdam labore exercitationem maxime aliquam soluta quos eos eveniet rerum mollitia? In.
                            Et, illo velit consectetur aut maxime distinctio ut dolorum quis quae totam in id cumque quam consequatur? Totam saepe excepturi odio, minus error tempore maiores libero, quas unde commodi explicabo.
                            Iusto aspernatur, exercitationem libero illum odio necessitatibus expedita tempora minus optio praesentium odit dignissimos fugiat, doloribus amet consectetur vel animi autem enim saepe veniam nemo. Cupiditate inventore tempore doloribus saepe?
                            Nobis error cumque ab et molestiae sit veritatis numquam magni illo veniam doloribus ea, temporibus perspiciatis reprehenderit! Reprehenderit dolore sed modi fugiat, inventore enim beatae commodi veritatis sunt iusto consequuntur!
                            Sint expedita quam reprehenderit deleniti omnis voluptatum dignissimos! Similique optio vitae magni sapiente nesciunt voluptatibus est possimus praesentium recusandae! Ab quia, vel earum quod soluta nostrum nemo doloribus aliquam eos!
                            Quam minima, voluptatum maiores tempore voluptate distinctio deleniti eligendi tenetur dolorum amet, perferendis dolorem, dignissimos quaerat magnam assumenda error! Voluptatibus amet quia, ipsa placeat nobis commodi doloremque vitae quasi cum!
                            Consequatur excepturi ipsum consequuntur, doloremque sapiente praesentium aliquid animi corporis inventore illum facilis odit vitae maxime nobis voluptatem. Debitis placeat sed fugiat odio cumque soluta nostrum ipsam laborum doloremque minus!
                            Voluptas tempore, ipsum aspernatur fugiat, tempora id, veritatis nobis sapiente omnis dolore cupiditate soluta ad numquam rem voluptatibus repudiandae facere laboriosam doloremque. Eaque accusamus corrupti minus ipsa doloribus doloremque saepe!
                            Facilis quidem possimus exercitationem, praesentium obcaecati excepturi similique voluptatibus amet deleniti placeat reiciendis, eius atque dignissimos, minima minus consequuntur quam. Necessitatibus accusantium porro, in laboriosam nisi totam aut adipisci consectetur!
                            Fuga quaerat delectus repellendus eos autem. Hic suscipit voluptas consectetur fugiat! Animi delectus alias dolorum, voluptatum labore temporibus eos tempore unde magni, sapiente minima! Culpa porro ad eum quasi repellendus.
                            Quidem error vero nesciunt, vitae hic libero enim iusto voluptatem sint quod aperiam aliquid ab reiciendis beatae autem perferendis ex blanditiis dolores in nam ipsam temporibus cupiditate pariatur. Dolorem, ipsum?
                            Eum fuga accusantium officia? Excepturi veniam ducimus unde! Consectetur omnis ipsa, expedita et ullam earum itaque, suscipit hic possimus ab excepturi aliquid officia quaerat, aut sunt dicta exercitationem nemo asperiores.
                            Explicabo eum cum numquam at porro temporibus, exercitationem unde nulla, ad, maiores officia. Temporibus tenetur eaque quis nulla sed incidunt distinctio repudiandae magni nobis, vero possimus minus eos corporis unde!
                            Possimus ut similique asperiores quidem dolores architecto nulla corporis atque beatae enim veniam obcaecati distinctio, aut, explicabo libero perspiciatis rerum doloremque aspernatur minima odit, eligendi ipsum error. Eligendi, praesentium mollitia!
                            Natus quisquam libero delectus dolorem similique nam error eveniet qui. Neque officiis nemo delectus possimus veniam quis quod enim maxime consectetur earum id eos accusantium, non accusamus maiores aliquam quasi?
                            Placeat rerum beatae unde optio corporis facere aspernatur recusandae nulla aliquam animi, minus commodi aperiam. Nihil, quae. Necessitatibus, optio illum nemo dolor sapiente velit nesciunt, non, cumque voluptatum corrupti nulla.
                            Recusandae natus quia distinctio praesentium, voluptatum repellat veniam aperiam est ipsum quasi vel molestias cum cupiditate assumenda earum, odio fugiat nam quod! Aliquam vel repudiandae, exercitationem veniam asperiores error eius?
                            Veniam unde necessitatibus temporibus dicta ipsum inventore dolores alias cum hic aliquam omnis repellendus excepturi voluptatem officiis architecto, nemo dignissimos ut ullam sunt ipsa ipsam vero? Deleniti libero incidunt commodi.
                            Hic eum amet temporibus a obcaecati quo non accusantium consequuntur animi consectetur aliquam sequi est nostrum beatae necessitatibus, ducimus nihil. Expedita, laudantium? Odio eligendi quae nam nulla cumque modi fuga!
                            Reiciendis eveniet rem quo totam optio repellendus adipisci nemo necessitatibus numquam ea nobis unde nisi, ab assumenda officiis mollitia veniam veritatis. Quod, aliquam quas quidem saepe obcaecati ipsam. Facilis, molestias.
                            Consequuntur inventore debitis laudantium temporibus itaque odit quam quae eius reprehenderit. Recusandae, ad vitae ipsa harum, aliquid quod dolorum minus dolor iusto cum perferendis fugit, autem modi quas exercitationem esse.
                            Distinctio sapiente at beatae, temporibus unde, maxime iusto maiores fugiat voluptatem possimus quod reprehenderit, vel asperiores repudiandae quaerat ipsum repellendus fugit aliquam. Nesciunt doloribus explicabo aspernatur excepturi sequi quam necessitatibus!
                            Laboriosam adipisci obcaecati culpa rerum quibusdam necessitatibus voluptatem corrupti minima fugiat libero provident molestias delectus doloremque consectetur eligendi eius unde maxime incidunt eaque, enim rem consequatur commodi officia? Accusantium, ea!
                            Facilis, deserunt quos! Cumque perferendis obcaecati fugit rerum, laboriosam dolores reprehenderit ducimus? Suscipit ipsum dolores magnam quod alias temporibus enim in necessitatibus beatae eaque pariatur, harum totam ab similique eveniet.
                            Ut impedit odit earum, animi cum commodi quisquam doloribus libero nostrum aut aspernatur eligendi dicta in porro explicabo, blanditiis sint atque recusandae, itaque iste laborum laudantium minus velit odio? Qui!
                        </div>
                    </div>
                </div>

                <div className='relative border-t border-color'>
                    <div className=' w-full -bottom-16 md:absolute'>
                        <MessagesBodyTextarea />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessagesBody;